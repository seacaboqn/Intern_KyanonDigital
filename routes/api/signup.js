var express = require('express');
var router = express.Router();
const user = require('../../models/user');
const bcrypt = require('bcrypt');

/* GET home page. */
router.post('/', async (req, res, next) => {
    const {username, password} = req.body;
    const check = await user.findOne({where: {username: username}});
    if(check){
        res.status(302).json({noti: 'Tai khoan da ton tai'});
        return;
    }
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashPassword = await bcrypt.hash(password, salt);
    const id = await user.max('id') + 1;
    const newUser = {
        id: id,
        username: username,
        password: hashPassword
    };
    await user.create(newUser);
    res.status(201).json({noti: 'Dang ky thanh cong'});
});

module.exports = router;
