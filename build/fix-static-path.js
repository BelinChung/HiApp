const fs = require('fs');
const path = require('path');

module.exports = function () {
  const cssFiles = fs.readdirSync('./www/static/css');
  cssFiles.forEach((cssFile) => {
    if (cssFile.indexOf('.') === 0) return;
    let fileContent = fs.readFileSync(path.resolve('./www/static/css', cssFile), 'utf8');
    fileContent = fileContent
      .replace(/url\(static\//gi, 'url(../')
      .replace(/url\(\/static\//gi, 'url(../');
      fs.writeFileSync(path.resolve('./www/static/css', cssFile), fileContent);
  });
}
