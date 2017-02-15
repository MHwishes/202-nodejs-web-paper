const homeworks = require('./routers/homeworks');
const section = require('./routers/section');
const paper = require('./routers/paper');

module.exports = function (app) {
    app.use('/homework', homeworks);
    app.use('/section', section);
    app.use('/paper', paper);
};