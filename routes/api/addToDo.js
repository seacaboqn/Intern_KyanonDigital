
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../../utils/passport');
const taskModel = require('../../models/task');
const TaskUser = require('../../models/tasks_user');

router.post('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const {ID, Name, Description, UserId, Status, DateOfCompletion } = req.body;
        const newTask = {
            id: ID,
            name: Name,
            description: Description,
            datecomplete: new Date(DateOfCompletion),
            status: Status,
            datecreated: new Date(),
            datemodified: new Date()
        }
        const newMission = {
            taskid: ID,
            userid: UserId
        }
        try {
            await taskModel.create(newTask);
        }
        catch{
            return res.status(409).json({noti: 'ID todo da bi trung'});
        }
        try {
            await TaskUser.create(newMission);
        }
        catch {
            return res.status(409).json({noti: 'user id khong hop le'});
        }

        res.status(201).json({noti: 'Them thanh cong'});
    });

module.exports = router;

