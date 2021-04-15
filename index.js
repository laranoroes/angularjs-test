const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./routes')(app);

app.use('/public', express.static('public'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000);
