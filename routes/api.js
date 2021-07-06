const express = require('express');
const router = express.Router();
const signupRouter = require('./api/signup');
const signinRouter = require('./api/signin');
const addToDoRouter = require('./api/addToDo.js');
const updateToDoRouter = require('./api/updateToDo.js');
const removeToDoRouter = require('./api/removeToDo.js');
const getAllToDoRouter = require('./api/getAllToDo.js');
const getToDoByIdRouter = require('./api/getToDoById.js');
const getAllUserRouter = require('./api/getAllUser.js');
const assignToDoRouter = require('./api/assignToDo.js');


router.use('/add-to-do',addToDoRouter);
router.use('/update-to-do',updateToDoRouter);
router.use('/remove-to-do',removeToDoRouter);
router.use('/get-to-do-by-id',getToDoByIdRouter);
router.use('/get-all-to-do',getAllToDoRouter);
router.use('/get-all-user',getAllUserRouter);
router.use('/assign-to-do',assignToDoRouter);
router.use('/signup', signupRouter);
router.use('/signin', signinRouter);

module.exports = router;