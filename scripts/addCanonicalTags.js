const fs = require('fs');
const path = require('path');

// Function to add canonical tag to service pages
function addCanonicalTags() {
  const servicesDir = path.join(__dirname, '../src/pages/services');
  
  if (!fs.existsSync(servicesDir)) {
    console.error('Services directory not found');
    return;
  }
  
  const serviceFiles = fs.readdirSync(servicesDir);
  
  let updatedCount = 0;
  
  serviceFiles.forEach(file => {
    if (file.endsWith('.jsx') && !file.startsWith('_')) {
      const filePath = path.join(servicesDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if already has canonical tag
      if (content.includes('rel="canonical"')) {
        console.log(`✓ ${file} already has canonical tag`);
        return;
      }
      
      // Generate slug from filename
      const slug = file.replace('.jsx', '');
      const canonicalUrl = `https://ramacarepolyclinic.ae/services/${slug}/`;
      
      // Look for the meta keywords tag and add canonical tag after it
      const canonicalTag = `\n  <link rel="canonical" href="${canonicalUrl}" />`;
      
      if (content.includes('meta name="keywords"')) {
        // Find the position to insert the canonical tag
        const insertPos = content.indexOf('</script>');
        
        if (insertPos > -1) {
          // Add just before </head>
          const modifiedContent = content.substring(0, insertPos) + canonicalTag + content.substring(insertPos);
          fs.writeFileSync(filePath, modifiedContent);
          console.log(`✓ Added canonical tag to ${file}`);
          updatedCount++;
        }
      } else {
        console.log(`⚠ ${file} doesn't have meta keywords tag, skipping`);
      }
    }
  });
  
  console.log(`\nUpdated ${updatedCount} service pages with canonical tags`);
}

// Run the function
addCanonicalTags();