const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));