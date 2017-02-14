import homeworks from './routers/homeworks';
const section = require('./routers/section');
const paper = require('./routers/paper');

export default function (app) {
    app.use('/homework', homeworks);
    app.use('/section', section);
    app.use('/paper', paper);
}