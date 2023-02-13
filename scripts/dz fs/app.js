const fs = require('fs');
const _ = require('lodash');

const createCssFile = () => {
  fs.mkdir('styles', (err) => {
    if (err) throw err;
    const css = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `;
    fs.writeFile('styles/style.css', css, (err) => {
      if (err) throw err;
      console.log('CSS file created');
    });
  });
}

const deleteFiles = () => {
  fs.unlink('index.html', (err) => {
    if (err) throw err;
    console.log('HTML file deleted');
    fs.unlink('styles/style.css', (err) => {
      if (err) throw err;
      console.log('CSS file deleted');
      fs.rmdir('styles', (err) => {
        if (err) throw err;
        console.log('Styles folder deleted');
        deleteFiles();
      });
    });
  });
}

const createIndexFile = () => {
  const code = `
    const _ = require('lodash');
    
    const arr = [1, 2, 3, 4, 5];
    console.log(_.chunk(arr, 2)); // [[1, 2], [3, 4], [5]]
    console.log(_.reverse(arr)); // [5, 4, 3, 2, 1]
  `;
  fs.writeFile('index.js', code, (err) => {
    if (err) throw err;
    console.log('index.js file created');
  });
}


const createHtmlFile = () => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>My HTML File</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
      </body>
    </html>
  `;
  fs.writeFile('index.html', html, (err) => {
    if (err) throw err;
    console.log('HTML file created');
    createCssFile();
  });
}

createIndexFile();
createHtmlFile();
