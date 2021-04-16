const shouldThrowError = () => {
    //return false;
    
    if (Math.floor(Math.random() * (6 - 1)) + 1==5) {
        return true;
        console.log('Throw Error!');
    }
    
    return false;
};
module.exports = {
    checkIfNeedsError: async (req, res) => {
        if (shouldThrowError()) {
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