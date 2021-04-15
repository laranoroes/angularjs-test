var db = require('./db.js');
var errortest = require('./errortest.js');


module.exports = (app) => {
    app.get('/', async (req, res) => {
        res.render('index.html');
    });
    
    app.get('/api/cameras', async (req, res) => {
        await errortest.checkIfNeedsError(req, res); //Do not change, used for test purposes
        
        res.status(200).json(db.cameras);
    });
    
    app.delete('/api/cameras/:id', async (req, res) => {
        await errortest.checkIfNeedsError(req, res); //Do not change, used for test purposes
        
        console.log('Received id:', req.params.id);
        //TODO Delete camera from db
        
        res.status(200);
    });
    
    
    app.post('/api/contact', async (req, res) => {
        await errortest.checkIfNeedsError(req, res); //Do not change, used for test purposes
        
        
        //TODO Insert contact info into db.contacts
        
        res.status(200).end();
    });
    
    //Do not change, used for test purposes
    app.get('/api/contact', (req, res) => {
        res.status(200).json(db.contacts);
    });
};