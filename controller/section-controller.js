const async = require('async');
const Section = require('../model/section');
const constant = require('../constant/constant');


class SectionController {
    getAll(req, res, next) {
        async.series({
            items: (cb)=> {
                Section.find({}, cb)

            },
            totalCount: (cb)=> {
                Section.count(cb)
            }
        }, (err, result)=> {
            if (err) {
                return next(err);
            }
            return res.status(constant.httpCode.OK).send(result);
        })

    }

    create(req, res, next) {
        Section.create(req.body, (err, result)=> {
            if (err) {
                next(err);
            }
            res.sendStatus(constant.httpCode.Created);
        })
    }

    getOne(req, res, next) {
        Section.findOne({_id: req.params.id}, (err, result)=> {
            if (err) {
                next(err);
            }
            if (!result) {
                res.sendStatus(constant.httpCode.NOT_FOUND);
            }
            res.status(constant.httpCode.ok).send(result);
        })
    }

    update(req, res, next) {
        Section.update({_id: req.params.id}, req.body, function (err, result) {
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
        Section.remove({_id: req.params.id}, function (err, result) {
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

module.exports = SectionController;
