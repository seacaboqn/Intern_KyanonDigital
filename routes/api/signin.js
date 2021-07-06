var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../../utils/passport');


router.post('/', passport.authenticate('local', { session: false }), (req, res, next) => {
    // Passport store user info in req.user
    const user = req.user;
    // Generate jwt token for user, you can also add more data to sign, such as: role, birthday...
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(301).json({token});
});

module.exports = router;