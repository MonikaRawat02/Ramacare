import dbConnect from '../../../lib/database';
import Blog from '../../../models/blog';

// Function to get all published blogs
async function getAllPublishedBlogs() {
  try {
    await dbConnect();
    const blogs = await Blog.find({ status: 'published' }).select('paramlink updatedAt createdAt').lean();
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Function to get all service pages
function getAllServicePages() {
  const fs = require('fs');
  const path = require('path');
  
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
}

// Function to get all doctor IDs from the doctors index page
function getAllDoctorIds() {
  try {
    const fs = require('fs');
    const path = require('path');
    
    // Read the doctors index file
    const doctorsIndexPath = path.join(process.cwd(), 'src', 'pages', 'doctors', 'index.jsx');
    if (!fs.existsSync(doctorsIndexPath)) {
      return [];
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
    
    return [];
  } catch (error) {
    console.error('Error extracting doctor IDs:', error);
    // Fallback to known doctor IDs based on the sample data
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }
}

// Function to generate sitemap
function generateSitemap(blogs, services, doctorIds) {
  const baseUrl = 'https://ramacarepolyclinic.ae';
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  
  // Add homepage
  xml += `  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
  </url>
`;
  
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
    xml += `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>
`;
  });
  
  // Add service pages
  services.forEach(service => {
    xml += `  <url>
    <loc>${baseUrl}${service}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
    <changefreq>weekly</changefreq>
  </url>
`;
  });
  
  // Add blog pages
  xml += `  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
    <changefreq>weekly</changefreq>
  </url>
`;
  
  blogs.forEach(blog => {
    const lastmod = blog.updatedAt || blog.createdAt;
    xml += `  <url>
    <loc>${baseUrl}/blog/${blog.paramlink}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
  </url>
`;
  });
  
  // Add individual doctor pages
  doctorIds.forEach(doctorId => {
    xml += `  <url>
    <loc>${baseUrl}/doctors/${doctorId}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
  </url>
`;
  });
  
  xml += '</urlset>';
  
  return xml;
}

export default async function handler(req, res) {
  // Set response headers
  res.setHeader('Content-Type', 'text/xml');
  
  // Instructing the Vercel edge network not to cache the Sitemap
  if (process.env.VERCEL) {
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  } else {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }
  
  // Fetch dynamic content
  const blogs = await getAllPublishedBlogs();
  const services = getAllServicePages();
  const doctorIds = getAllDoctorIds();
  
  // Generate sitemap
  const sitemap = generateSitemap(blogs, services, doctorIds);
  
  // Send sitemap
  res.send(sitemap);
}