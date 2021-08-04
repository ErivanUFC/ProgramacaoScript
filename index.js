const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({
  extended: true
}))

app.set('view engine', 'ejs');

app.post('/', (req, res) => {
  let number = req.body.number;
  let result = Math.pow(number, 2);

  res.render('index', { result: result });
});

app.get('/', (req, res) => {
  res.render('index', { result: undefined });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));