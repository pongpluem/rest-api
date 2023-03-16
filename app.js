const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World123!');
});

app.get('/login', (req, res) => {
    res.send('Login page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
