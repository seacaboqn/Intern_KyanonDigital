
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../../utils/passport');
const taskUserModel = require('../../models/tasks_user');

router.post('/', passport.authenticate('jwt', { session: false }),
    async (req, res ) => {
        const { taskid, userid} = req.body;
        const user = parseInt(userid);
        const auth = await req.get('Authorization').replace('Bearer ', '');
        const { id } = jwt.decode(auth);
        if(id === user){
            res.status(406).json({noti:'Trung userId'});
        }
        else{
            try {
                await taskUserModel.create({userid: user, taskid: taskid});
                res.status(200).json({noti: 'Assign thanh cong'});
            }
            catch {
                return res.status(406).json({noti: 'User/task chua ton tai hoac user da lam task'});
            }
        }
    });

module.exports = router;

