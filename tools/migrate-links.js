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
  console.log('Scanning directory:', srcDir);
  const files = await walk(srcDir);
  
  let count = 0;
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    if (content.includes("from 'react-router-dom'")) {
      // Check if it's the exact import { Link } from 'react-router-dom'
      const updatedContent = content
        .replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import Link from '@/components/Link';")
        .replace(/import\s+\{\s*Link,\s*([a-zA-Z0-9_,\s]+)\}\s+from\s+['"]react-router-dom['"];?/g, (match, p1) => {
          return `import Link from '@/components/Link';\nimport { ${p1.trim()} } from 'react-router-dom';`;
        });
      
      if (updatedContent !== content) {
        await fs.writeFile(file, updatedContent, 'utf8');
        console.log('Migrated Link in:', file);
        count++;
      }
    }
  }
  console.log(`Successfully migrated ${count} files.`);
}

run().catch(console.error);
