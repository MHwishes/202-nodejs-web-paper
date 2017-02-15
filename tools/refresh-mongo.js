const rawData = require('./raw-data');
const mongoose = require('mongoose');
const Homework = require('../model/homework');
const Paper = require('../model/paper');
const Section = require('../model/section');

const modelMap = {Homework, Paper, Section};
// mongoose.connect('mongodb://localhost/exam');
var docs = Object.keys(rawData);
module.exports = function refresh() {


    Object.keys(rawData).forEach(v=> {
        modelMap[v].remove(()=> {
            modelMap[v].create(rawData[v], ()=> {
                docs = docs.filter(doc => doc !== v);
                if (docs.length === 0) {
                    // process.exit(0);
                }
            })
        })
    });
}