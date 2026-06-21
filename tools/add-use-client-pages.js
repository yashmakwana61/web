import { promises as fs } from 'node:fs';
import path from 'node:path';

async function run() {
  const pagesDir = path.resolve('src/pages');
  console.log('Scanning pages:', pagesDir);
  const files = await fs.readdir(pagesDir);
  
  let count = 0;
  for (const file of files) {
    if (file.endsWith('.jsx') || file.endsWith('.js')) {
      const filePath = path.join(pagesDir, file);
      const content = await fs.readFile(filePath, 'utf8');
      
      if (content.trim().startsWith("'use client'") || content.trim().startsWith('"use client"')) {
        continue;
      }
      
      // Clean Helmet usages if we can, but simply marking it 'use client' is sufficient for runtime compatibility.
      const updatedContent = `'use client';\n\n${content}`;
      await fs.writeFile(filePath, updatedContent, 'utf8');
      console.log('Added use client to page:', file);
      count++;
    }
  }
  console.log(`Successfully added 'use client' to ${count} page files.`);
}

run().catch(console.error);
