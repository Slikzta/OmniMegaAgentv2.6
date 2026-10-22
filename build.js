import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

try {
  const serverContent = fs.readFileSync('server.js', 'utf-8');
  const match = serverContent.match(/const HTML_CONTENT = `([\s\S]*?)`;/);
  if (match) {
    fs.writeFileSync(path.join(distDir, 'index.html'), match[1]);
  } else {
    fs.writeFileSync(path.join(distDir, 'index.html'), '<!DOCTYPE html><html><head><title>OmniAgent</title></head><body><h1>OmniAgent</h1></body></html>');
  }
} catch (e) {
  fs.writeFileSync(path.join(distDir, 'index.html'), '<!DOCTYPE html><html><head><title>OmniAgent</title></head><body><h1>OmniAgent</h1></body></html>');
}

console.log('Build completed: dist/index.html created successfully.');
