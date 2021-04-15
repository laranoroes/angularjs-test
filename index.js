const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.render('index.html');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
