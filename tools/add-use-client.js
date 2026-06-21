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
  const componentsDir = path.resolve('src/components');
  console.log('Scanning components:', componentsDir);
  const files = await walk(componentsDir);
  
  let count = 0;
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    
    // Check if the file already has 'use client' or "use client"
    if (content.trim().startsWith("'use client'") || content.trim().startsWith('"use client"')) {
      continue;
    }
    
    // Prepend 'use client' if it imports hooks, motion, recharts, or has standard client indicators
    const needsUseClient = 
      content.includes('useState') ||
      content.includes('useEffect') ||
      content.includes('useRef') ||
      content.includes('useContext') ||
      content.includes('useMemo') ||
      content.includes('useCallback') ||
      content.includes('framer-motion') ||
      content.includes('recharts') ||
      content.includes('next-themes') ||
      content.includes('react-countup') ||
      content.includes('react-hook-form') ||
      content.includes('lucide-react') ||
      content.includes('@/components/Link') ||
      content.includes('use-mobile') ||
      content.includes('use-toast') ||
      content.includes('useAnimationVariants') ||
      content.includes('useIntersectionObserver') ||
      content.includes('useCounterAnimation');

    if (needsUseClient) {
      const updatedContent = `'use client';\n\n${content}`;
      await fs.writeFile(file, updatedContent, 'utf8');
      console.log('Added use client to:', file);
      count++;
    }
  }
  console.log(`Successfully added 'use client' to ${count} files.`);
}

run().catch(console.error);
