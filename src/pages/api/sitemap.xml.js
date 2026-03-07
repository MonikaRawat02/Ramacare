// Function to get all published blogs (now returning empty array to avoid database dependency during build)
async function getAllPublishedBlogs() {
  try {
    // Dynamically import database modules only when needed at runtime
    const dbConnect = (await import('../../../lib/database')).default;
    const Blog = (await import('../../../models/blog')).default;
    
    await dbConnect();
    const blogs = await Blog.find({ status: 'published' }).select('paramlink updatedAt createdAt').lean();
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return []; // Return empty array if there's an error
  }
}

// Function to get all service pages
async function getAllServicePages() {
  try {
    const fs = await import('fs').then(mod => mod.default || mod);
    const path = await import('path').then(mod => mod.default || mod);
    
    const servicesDir = path.join(process.cwd(), 'src', 'pages', 'services');
    
    if (!fs.existsSync(servicesDir)) {
      return [];
    }
    
    const serviceFiles = fs.readdirSync(servicesDir);
    const servicePages = serviceFiles
      .filter(file => file.endsWith('.jsx') && file !== '_app.jsx' && file !== '_document.jsx')
      .map(file => {
        const slug = file.replace('.jsx', '');
        return `/services/${slug}`;
      });
      
    return servicePages;
  } catch (error) {
    console.error('Error reading services directory:', error);
    return []; // Return empty array if services directory doesn't exist
  }
}
// Function to get all doctor IDs from the doctors index page
async function getAllDoctorIds() {
  try {
    const fs = await import('fs').then(mod => mod.default || mod);
    const path = await import('path').then(mod => mod.default || mod);
    
    // Read the doctors index file
    const doctorsIndexPath = path.join(process.cwd(), 'src', 'pages', 'doctors', 'index.jsx');
    if (!fs.existsSync(doctorsIndexPath)) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // Default doctor IDs
    }
    
    const content = fs.readFileSync(doctorsIndexPath, 'utf8');
    
    // Extract doctor IDs using regex - looking for id patterns in the doctors array
    const idMatches = content.match(/id:\s*(\d+)/g);
    if (idMatches) {
      return idMatches.map(match => {
        const idMatch = match.match(/id:\s*(\d+)/);
        return idMatch ? parseInt(idMatch[1], 10) : null;
      }).filter(id => id !== null);
    }
    
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // Default fallback
  } catch (error) {
    console.error('Error extracting doctor IDs:', error);
    // Fallback to known doctor IDs based on the sample data
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }
}

// Function to generate sitemap with deduplication
async function generateSitemap(blogs, services, doctorIds) {
  const baseUrl = 'https://ramacarepolyclinic.ae';
  
  // Use a Set to track unique URLs and prevent duplicates
  const urlSet = new Set();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  
  // Helper function to add URL only if it doesn't exist
  const addUrl = (loc, lastmod, priority, changefreq) => {
    if (!urlSet.has(loc)) {
      urlSet.add(loc);
      xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
  </url>
`;
    } else {
      console.log(`Duplicate URL skipped: ${loc}`);
    }
  };
  
  // Add homepage
  addUrl(`${baseUrl}/`, new Date().toISOString(), '1.0', 'daily');
  
  // Add static pages
  const staticPages = [
    '/services',
    '/blog',
    '/doctors',
    '/privacy-policy',
    '/refund-and-cancellation-policy',
    '/testimonials'
  ];
  
  staticPages.forEach(page => {
    addUrl(`${baseUrl}${page}`, new Date().toISOString(), '0.9', 'weekly');
  });
  
  // Add service pages (individual services, not the /services index)
  for (const service of services) {
    addUrl(`${baseUrl}${service}`, new Date().toISOString(), '0.8', 'weekly');
  }
  
  // Add blog index page
  addUrl(`${baseUrl}/blog`, new Date().toISOString(), '0.8', 'weekly');
  
  // Add individual blog posts if they exist
  blogs.forEach(blog => {
    const lastmod = blog.updatedAt || blog.createdAt;
    addUrl(`${baseUrl}/blog/${blog.paramlink}`, new Date(lastmod).toISOString(), '0.7', 'weekly');
  });
  
  // Add individual doctor pages
  doctorIds.forEach(doctorId => {
    addUrl(`${baseUrl}/doctors/${doctorId}`, new Date().toISOString(), '0.7', 'weekly');
  });
  
  xml += '</urlset>';
  
  console.log(`Generated sitemap with ${urlSet.size} unique URLs`);
  return xml;
}

export default async function handler(req, res) {
  // Handle trailing slash - redirect to clean URL
  const url = req.url || '';
  if (url.endsWith('/')) {
    return res.redirect(301, '/api/sitemap.xml');
  }
  
  // Set response headers
  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  
  // Instructing the Vercel edge network not to cache the Sitemap
  if (process.env.VERCEL) {
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  } else {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }
  
  try {
    // Fetch dynamic content (without database dependencies during build)
    const blogs = await getAllPublishedBlogs();
    const services = await getAllServicePages();
    const doctorIds = await getAllDoctorIds();
    
    // Generate sitemap
    const sitemap = await generateSitemap(blogs, services, doctorIds);
    
    // Send sitemap
    res.send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
}