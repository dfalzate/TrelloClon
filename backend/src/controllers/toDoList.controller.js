const boardModel = require('../models/board.model');
const toDoListModel = require('../models/toDoList.models');

module.exports = {
	async create(req, res) {
		try {
			const data = req.body;
			const boardId = req.params.boardId;
			const response = await toDoListModel.create(data);
			const board = await boardModel.findById(boardId);
			board.toDoLists.push(response._id);
			const updatedBoard = await boardModel.findByIdAndUpdate(boardId, board, {
				new: true,
				useFindAndModify: false,
				runValidators: true,
			});
			if (updatedBoard) {
				res.status(200).send(response);
			} else {
				res.status(400).send('Bad request');
			}
		} catch (error) {
			res.status(400).send('Error: ' + error);
		}
	},
	async update(req, res) {
		try {
			const toDoListId = req.params.toDoListId;
			const data = req.body;
			const response = await toDoListModel.findByIdAndUpdate(toDoListId, data, {
				new: true,
				useFindAndModify: false,
				runValidators: true,
			});
			if (response) {
				res.status(200).send(response);
			} else {
				res.status(400).send('Bad request');
			}
		} catch (error) {
			res.status(400).send('Error: ' + error);
		}
	},
	async delete(req, res) {
		try {
			const boardId = req.params.boardId;
			const toDoListId = req.params.toDoListId;
			await toDoListModel.findByIdAndDelete(toDoListId);
			const board = await boardModel.findById(boardId);
			board.toDoLists.splice(board.toDoLists.indexOf(toDoListId), 1);
			const updatedBoard = await boardModel.findByIdAndUpdate(boardId, board, {
				new: true,
				useFindAndModify: false,
				runValidators: true,
			});
			if (updatedBoard) {
				res.status(200).send('ToDo deleted!');
			} else {
				res.status(400).send('Bad request');
			}
		} catch (error) {
			res.status(400).send('Error: ' + error);
		}
	},
};
