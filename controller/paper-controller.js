const async = require('async');
const paper = require('../model/paper');
const constant = require('../constant/constant');


class PaperController {
    getAll(req, res, next) {
        async.series({
            items: (cb)=> {
                paper.find({}, cb)

            },
            totalCount: (cb)=> {
                paper.count(cb)
            }
        }, (err, result)=> {
            if (err) {
                return next(err);
            }
            return res.status(constant.httpCode.OK).send(result);
        })

    }

    create(req, res, next) {
        paper.create(req.body, (err, result)=> {
            if (err) {
                next(err);
            }
            res.sendStatus(constant.httpCode.Created);
        })
    }

    getOne(req, res, next) {
        paper.findOne({_id: req.params.id}, (err, result)=> {
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
        paper.update({_id: req.params.id}, req.body, function (err, result) {
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
        paper.remove({_id: req.params.id}, function (err, result) {
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

module.exports = PaperController;