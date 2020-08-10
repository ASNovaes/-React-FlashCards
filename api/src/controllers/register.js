const register = require('../model/register.js');

module.exports = server => {
    server.get('/', (req, res) => {
        register.getFlahCards(res);
    });

    server.get('/flashtopic', (req, res) => {
        register.getFlashTopic(res);
    });

    server.get('/:id', (req, res) => {
        const id = req.params.id;
        register.getFlashCurrent(res, id);
    });

    server.delete('/:id', (req, res) => {
        const id = req.params.id;
        register.deleteFlashCard(res, id);
    });

    server.post('/addflashtopic', (req, res) => {
        const record = req.body;
        register.addFlashTopic(res, record);
    });

    server.post('/addflashcard', (req, res) => {
        const record = req.body;
        register.addFlashCard(res, record);
    });

    server.patch('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        register.updateFlahCard(res, id, values);
    });
}


