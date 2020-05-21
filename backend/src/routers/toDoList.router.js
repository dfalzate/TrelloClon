const router = require('express').Router();
const toDoListController = require('../controllers/toDoList.controller');

router.route('/board/:boardId').post(toDoListController.create);
router.route('/:toDoListId').put(toDoListController.update);
router.route('/board/:boardId/todolist/:toDoListId').delete(toDoListController.delete);

module.exports = router;
