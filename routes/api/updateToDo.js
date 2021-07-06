
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../../utils/passport');
const taskModel = require('../../models/task')

router.put('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const {ID, Name, Description, Status, DateOfCreation, DateOfCompletion } = req.body;
        const targetTask = await taskModel.findByPk(ID);
        if(!targetTask){
            return res.status(404).json({noti: 'Khong tim thay todo'});
        }
        else {
            if(targetTask.status ==='COMPLETE'){
                return res.status(406).json({noti: 'Todo da Complete'});
            }
            else {
                Name && (targetTask.name = Name);
                Description && (targetTask.description = Description);
                Status && (targetTask.status = Status);
                DateOfCreation && (targetTask.datecreated = new Date(DateOfCreation));
                DateOfCompletion && (targetTask.datecomplete = new Date(DateOfCompletion));
                targetTask.datemodified = new Date();
                await targetTask.save();
                res.status(200).json({noti: 'Cap nhat thanh cong'});
            }
        }
    });

module.exports = router;

