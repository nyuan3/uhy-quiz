import { readFileSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';

const srcPath = resolve('index.html');
const distDir = resolve('dist');
const destPath = join(distDir, 'index.html');

const html = readFileSync(srcPath, 'utf8');
const adjusted = html.replace('./dist/uhy-quiz.js', './uhy-quiz.js');

writeFileSync(destPath, adjusted, 'utf8');

console.log(`Copied ${srcPath} -> ${destPath}`);

