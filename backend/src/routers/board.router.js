const router = require('express').Router();
const boardController = require('../controllers/board.controller');

router.route('/').post(boardController.create);
router.route('/:boardId').put(boardController.update);
router.route('/:boardId').delete(boardController.delete);
router.route('/:boardId').get(boardController.findOne);
router.route('/user/:userId').get(boardController.findAll);

module.exports = router;
