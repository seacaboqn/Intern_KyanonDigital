
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../../utils/passport');
const taskModel = require('../../models/task');

router.delete('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const {ID} = req.body;
        const removeTask = await taskModel.findByPk(ID);
        if(removeTask){
            if(removeTask.status === 'COMPLETE'){
                return res.status(406).json({noti: 'Todo da Complete'});
            }
            else {
                await removeTask.destroy();
                res.status(202).json({noti:'Xoa thanh cong'});
            }
        }
        else{
            res.status(404).json({noti: 'Khong tim thay task'});
        }

    });

module.exports = router;

