import { promises as fs } from 'node:fs';
import path from 'node:path';

async function run() {
  const pagesDir = path.resolve('src/pages');
  console.log('Removing Helmet from pages in:', pagesDir);
  const files = await fs.readdir(pagesDir);
  
  let count = 0;
  for (const file of files) {
    if (file.endsWith('.jsx') || file.endsWith('.js')) {
      const filePath = path.join(pagesDir, file);
      const content = await fs.readFile(filePath, 'utf8');
      
      if (content.includes('react-helmet')) {
        const updatedContent = content
          .replace(/import\s+\{?\s*Helmet\s*\}?\s+from\s+['"]react-helmet['"];?/g, '')
          .replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
        
        await fs.writeFile(filePath, updatedContent, 'utf8');
        console.log('Removed Helmet from:', file);
        count++;
      }
    }
  }
  console.log(`Successfully removed Helmet from ${count} page files.`);
}

run().catch(console.error);
