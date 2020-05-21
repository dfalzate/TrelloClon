const router = require('express').Router();
const toDoController = require('../controllers/toDo.controller');

router.route('/todolist/:toDoListId/todo').post(toDoController.create);
router.route('/todolist/:toDoListId/todo/:toDoId').get(toDoController.findById);

module.exports = router;
