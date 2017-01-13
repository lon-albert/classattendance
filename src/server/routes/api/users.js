/**
 * Created by lon on 1/3/17.
 */

var express = require('express');
var router = express.Router();
var Students = require('../../app/models').student;
var Lecturers = require('../../app/models').lecturer;
var Courses = require('../../app/models').course;
var _ = require('underscore');

router.get('/students', function(req, res) {
    Students.find({})
        .lean()
        .exec()
        .then(docs => {
            let len = docs.length;
            let counter = 0;
            _.each(docs, (doc) => {
                Courses.find({students: doc._id}).exec().then(courses => {
                    doc.courses = courses;
                    if(++counter == len) {
                        return res.json(docs)
                    }
                });
            });
        })
        .catch(err => {
            return console.error(err)
        });
});

router.get('/lecturers', function(req, res) {
    Lecturers.find({})
        .lean()
        .exec()
        .then(docs => {
            let len = docs.length;
            let counter = 0;
            _.each(docs, (doc) => {
                Courses.find({coordinator: doc._id}).exec().then(courses => {
                    doc.courses = courses;
                    if(++counter == len) {
                        return res.json(docs)
                    }
                });
            });
        })
        .catch(err => {
            return console.error(err)
        });
});

module.exports = router;