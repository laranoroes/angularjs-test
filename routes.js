var db = require('./db.js');
var errortest = require('./errortest.js');


module.exports = (app) => {

    //Middleware function to handle "No 'Access-Control-Allow-Origin' header"
    //Reference: https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
    app.use(function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');       
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');      
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);      
        // Pass to next layer of middleware
        next();
    });

    app.get('/', async (req, res) => {
        res.render('index.html');
    });
    
    app.get('/contact', async (req, res) => {
        res.render('index.html');
    });
    
    app.get('/api/cameras', async (req, res) => {
        await errortest.checkIfNeedsError(req, res); //Do not change, used for test purposes
        res.status(200).json(db.cameras);
        
    });
    
    //Do not change, used for test purposes
    app.get('/api/contact', (req, res) => {
        res.status(200).json(db.contacts);
    });
    
    app.delete('/api/cameras/:id', async (req, res) => {
        await errortest.checkIfNeedsError(req, res); //Do not change, used for test purposes
        
        console.log('Received id:', req.params.id);
        //TODO Delete camera from db
        
        res.status(200);
    });
    
    
    app.post('/api/contact', async (req, res) => {
        await errortest.checkIfNeedsError(req, res); //Do not change, used for test purposes
        console.log(req.body)
        var contato;
        contato = req.body;       
        db.contacts.push(contato);
        
        res.status(200).end();
    });
};