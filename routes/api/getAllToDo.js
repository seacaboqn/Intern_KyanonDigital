
var express = require('express');
var router = express.Router();
const passport = require('../../utils/passport');
const taskModel = require('../../models/task')

router.get('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const tasks = await taskModel.findAll();
        if (tasks) {
            res.status(200).json(tasks);
        }
        else {
            res.status(404).json({noti: 'Not found'});
        }
    });

module.exports = router;

