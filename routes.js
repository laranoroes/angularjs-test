var db = require('./db.js');

function getRandomNumberForErrorSimulation() {
    return 1;

    let rand = Math.floor(Math.random() * (6 - 1)) + 1;
    console.log(rand);
    return rand;
}

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index.html');
    });

    app.get('/api/cameras', (req, res) => {
        res.status(200)
        .json(db.cameras);
    });

    app.delete('/api/cameras/:id', (req, res) => {
        console.log('Received id:', req.params.id);
        //TODO Delete camera from db

        res.status(200);
    });


    app.post('/api/contact', (req, res) => {
        //Do not change, used for test purposes
        if (getRandomNumberForErrorSimulation()==5) {
            return setTimeout(function () {
                res.status(500)
                .json({ errorMessage: 'Servidor indisponível' });
            }, 2000);
        }
        //---------------


        //TODO Insert contact info into db.contacts

        res.status(200)
        .end();
    });

    //Do not change, used for test purposes
    app.get('/api/contact', (req, res) => {
        res.status(200)
        .json(db.contacts);
    });
};