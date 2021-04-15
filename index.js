const express = require('express');
const app = express();
require('./routes')(app);

app.use('/public', express.static('public'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(3000);
