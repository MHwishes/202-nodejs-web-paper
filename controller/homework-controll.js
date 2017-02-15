const async = require('async');
const Homework = require('../model/homework');
const constant = require('../constant/constant');


class HomeController {
    getAll(req, res, next) {
        async.series({
            items: (cb)=> {
                Homework.find({}, cb)

            },
            totalCount: (cb)=> {
                Homework.count(cb)
            }
        }, (err, result)=> {
            if (err) {
                return next(err);
            }
            return res.status(constant.httpCode.OK).send(result);
        })

    }

    create(req, res, next) {
        Homework.create(req.body, (err, result)=> {
            if (err) {
                next(err);
            }
            res.sendStatus(constant.httpCode.Created);
        })
    }

    getOne(req, res, next) {
        Homework.findOne({_id: req.params.id}, (err, result)=> {
            if (err) {
                next(err);
            }
            if (!result) {
                res.sendStatus(constant.httpCode.NOT_FOUND);
            }
            return res.status(constant.httpCode.OK).send(result);
        })
    }

    update(req, res, next) {
        Homework.update({_id: req.params.id}, req.body, function (err, result) {
            if (err) {
                res.next(err)
            }
            if (!result) {
                return res.sendStatus(constant.httpCode.NOT_FOUND);
            }
            res.sendStatus(constant.httpCode.NO_CONTENT);
        })
    }

    delete(req, res, next) {
        Homework.remove({_id: req.params.id}, function (err, result) {
            if (err) {
                res.next(err)
            }
            if (!result) {
                return res.sendStatus(constant.httpCode.NOT_FOUND);
            }
            res.sendStatus(constant.httpCode.NO_CONTENT);
        })
    }
}
module.exports = HomeController;
