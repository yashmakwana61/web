import { promises as fs } from 'node:fs';
import path from 'node:path';

async function walk(dir) {
  let files = [];
  const list = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of list) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await walk(res));
    } else if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.jsx'))) {
      files.push(res);
    }
  }
  return files;
}

async function run() {
  const srcDir = path.resolve('src');
  console.log('Scanning all files under src/ for react-helmet:', srcDir);
  const files = await walk(srcDir);
  
  let count = 0;
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    
    if (content.includes('react-helmet')) {
      const updatedContent = content
        .replace(/import\s+\{?\s*Helmet\s*\}?\s+from\s+['"]react-helmet['"];?/g, '')
        .replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
      
      await fs.writeFile(file, updatedContent, 'utf8');
      console.log('Removed react-helmet from:', file);
      count++;
    }
  }
  console.log(`Successfully cleaned react-helmet from ${count} files.`);
}

run().catch(console.error);
