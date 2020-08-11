const fs = require('fs');
const path = require('path');

const distDir = path.resolve('./dist');
const buildDir = path.resolve('./temp');

const buildTs = process.argv.includes('--ts');

const readDistFiles = () => {
  let folder = [];
  fs.readdirSync(buildDir).forEach((src) => {
    if (!src.match(/images|icons/)) {
      return;
    }

    fs.readdirSync(path.resolve(buildDir, src))
      .filter((item) => item.includes('.js') && !item.includes('index'))
      .map((f) => f.replace('.js', ''))
      .forEach((file) => {
        folder = [{ file, src }, ...folder];
      });
  });
  return folder;
};

const generateJsExports = () => {
  console.log('\n--- Genereting js exports ---\n');
  let content = '';
  try {
    const folder = readDistFiles();
    folder.forEach(({ file, src }) => {
      console.log('=> ', file);
      content += `export { default as ${file} } from './${src}/${file}.js';\n`;
    });
  } catch (err) {
    return console.log(err);
  }
  fs.writeFileSync(path.resolve(buildDir, 'index.js'), content);
};

const generateTsModules = () => {
  console.log('\n--- Genereting ts modules ---\n');
  let content = "import React from 'react';\n";

  try {
    const folder = readDistFiles();
    folder.forEach(({ file }) => {
      console.log('=> ', file);
      content += `\nexport function ${file}(props: React.SVGProps<SVGSVGElement>): JSX.Element;\n`;
    });

    fs.writeFileSync(path.resolve(distDir, 'index.d.ts'), content);
  } catch (err) {
    return console.log(err);
  }
};

generateJsExports();
if (buildTs) {
  generateTsModules();
}
