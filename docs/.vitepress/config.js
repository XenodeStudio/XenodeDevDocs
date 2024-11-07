import fs from 'fs';
import path from 'path';

export default {
    base: '/XenodeDevDocs/',

    title: 'Xenode Dev Documentation',
    description: 'The developer documentation for the game engine Xenode.',

    themeConfig: {
        nav: [
            { text: 'GitHub',                    link: 'https://github.com/XenodeStudio' },
        ],
        sidebar: [
            { text: 'Contributing Guidelines',   link: '/contributing.md' },
            { text: 'Code of Conduct',           link: '/code_of_conduct.md' },
            { text: 'Building from Source',      link: '/building.md' }
        ],

        footer: {
            message: 'Built with love by the Xenode Studio team.'
        }
    },

    // Metadata for Google SEO:
    head: [
        ['meta', {
            name: 'google-site-verification',
            content: 'rk5w0mlpKvSpex5z5XJ4lhOn2nVFHLZPso7G8XzMh5M'
        }]
    ],

    buildEnd() {
        // Define the sitemap content
        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
          <url>
            <loc>https://xenodestudio.github.io/XenodeDevDocs/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>

          <url>
            <loc>https://xenodestudio.github.io/XenodeDevDocs/contributing</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>

          <url>
            <loc>https://xenodestudio.github.io/XenodeDevDocs/code_of_conduct</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
          <url>
            <loc>https://xenodestudio.github.io/XenodeDevDocs/building</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        </urlset>`;
    
        // Write the sitemap to the dist directory
        fs.writeFileSync(path.resolve(__dirname, 'dist/sitemap.xml'), sitemapContent);
    }
}