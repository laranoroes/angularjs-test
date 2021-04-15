const getRandomNumberForErrorSimulation = () => {
    return 1;

    let rand = Math.floor(Math.random() * (6 - 1)) + 1;
    console.log(rand);
    return rand;
};
module.exports = {
    shouldThrowError: async (req, res) => {
        if (getRandomNumberForErrorSimulation()==5) {
            return new Promise((a, r) => {
                {
                    setTimeout(function () {
                        res.status(500)
                        .json({ errorMessage: 'Servidor indisponível' });
                        r();
                    }, 2000);
                }
            });
        }
    }
};