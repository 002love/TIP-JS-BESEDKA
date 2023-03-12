const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const names = ['John', 'Jane', 'Michael', 'Emma', 'Olivia', 'William'];
const countries = ['USA', 'Canada', 'UK', 'Germany', 'France', 'Japan'];

const filename = 'file.json';
const filepath = path.join(__dirname, filename);
fs.writeFile(filepath, JSON.stringify([]), (err) => {
    if (err) throw err;
    console.log(`File ${filename} created successfully!`);
});

const users = [];
for (let i = 0; i < 30; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const age = Math.floor(Math.random() * 100) + 1;
    const country = countries[Math.floor(Math.random() * countries.length)];
    users.push({ name, age, country });
}

fs.writeFile(filepath, JSON.stringify(users), (err) => {
    if (err) throw err;
    console.log(`File ${filename} updated successfully!`);
});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/list', (req, res) => {
    fs.readFile('file.json', 'utf-8', (err, data) => {
      if (err) throw err;
      const users = JSON.parse(data);
      res.render('list', { users });
    });
  });

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'styles.css'));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});
