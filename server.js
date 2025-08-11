const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/submit', (req, res) => {
  const name = req.body.name; 
  res.send(`Hello, ${name}! Your form was submitted.`);
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

