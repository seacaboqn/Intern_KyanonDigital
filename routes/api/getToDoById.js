
var express = require('express');
var router = express.Router();
const passport = require('../../utils/passport');
const taskModel = require('../../models/task')

router.get('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const {ID} = req.query;
        const task = await taskModel.findByPk(ID);
        if (task) {
            res.status(200).json(task);
        }
        else {
            res.status(404).json({noti: 'Not found'});
        }

    });

module.exports = router;

