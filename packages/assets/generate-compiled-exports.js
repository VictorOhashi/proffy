const fs = require('fs');
const path = require('path');

const distDir = path.resolve('./dist');
const destFile = path.resolve('./dist', 'index.js');

let content = '';

try {
  fs.readdirSync(distDir).forEach((f) => {
    if (f.match(/js/)) {
      return;
    }
    const files = fs.readdirSync(path.resolve(distDir, f));
    files
      .filter((item) => item.includes('.js') && !item.includes('index'))
      .forEach((file) => {
        const name = file.replace('.js', '');
        content += `export { default as ${name} } from './${f}/${file}';\n`;
      });
  });
} catch (err) {
  return console.log(err);
}

fs.writeFileSync(destFile, content);
