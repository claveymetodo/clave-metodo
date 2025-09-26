// scripts/copy-index-to-404.js
const fs = require('fs');
fs.copyFileSync('dist/index.html', 'dist/404.html');
console.log('Copied dist/index.html -> dist/404.html');

