
var express = require('express');
var router = express.Router();
const passport = require('../../utils/passport');
const userModel = require('../../models/user');

router.get('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const users = await userModel.findAll();
        if (users) {
            res.status(200).json(users);
        }
        else {
            res.status(404).json({noti: 'Not found'});
        }
    });

module.exports = router;

