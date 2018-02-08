var path = require('path'),
    users = require('../controllers/users'),
    polls = require('../controllers/polls'),
    sessions = require('../controllers/sessions');


module.exports = (app) => {
    // All server routes are Plural (ie: users, sessions, notes,)
    app.post('/users', users.create);
    
    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);
    
    app.post('/polls', polls.create);
    app.get('/polls', polls.index);

    app.get('/polls/:id', polls.show);
    app.delete('/polls/:id',polls.delete);
    app.post('/polls/:id', polls.add);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
};
