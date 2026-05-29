const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '../src/pages');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function cleanupCanonicalTags() {
  let updatedCount = 0;

  walkDir(PAGES_DIR, (filePath) => {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Regex to match <link rel="canonical" ... /> and variations
      const canonicalRegex = /<link\s+rel=["']canonical["']\s+href=["'][^"']+["']\s*\/?>/g;
      
      if (canonicalRegex.test(content)) {
        const newContent = content.replace(canonicalRegex, '');
        fs.writeFileSync(filePath, newContent);
        console.log(`✓ Removed canonical tag from ${path.relative(PAGES_DIR, filePath)}`);
        updatedCount++;
      }
    }
  });

  console.log(`\nFinished cleaning up ${updatedCount} files.`);
}

cleanupCanonicalTags();
