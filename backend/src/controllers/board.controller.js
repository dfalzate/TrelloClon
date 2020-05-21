const boardModel = require('../models/board.model');

module.exports = {
	async create(req, res) {
		try {
			const data = req.body;
			const response = await boardModel.create(data);
			if (response) {
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
			const boardId = req.params.boardId;
			const data = req.body;
			const response = await boardModel.findByIdAndUpdate(boardId, data, {
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
			const response = await boardModel.findByIdAndDelete(boardId);
			if (response) {
				res.status(200).send('Board deleted!');
			} else {
				res.status(400).send('Bad request');
			}
		} catch (error) {
			res.status(400).send('Error: ' + error);
		}
	},
	async findOne(req, res) {
		try {
			const boardId = req.params.boardId;
			const response = await boardModel.findById(boardId).populate('toDoList');
			if (response) {
				res.status(200).send(response);
			} else {
				res.status(400).send('Bad request');
			}
		} catch (error) {
			res.status(400).send('Error: ' + error);
		}
	},
	async findAll(req, res) {
		try {
			const userId = req.params.userId;
			const response = await boardModel.find({ userId: userId }).populate('ToDoList');
			if (response) {
				res.status(200).send(response);
			} else {
				res.status(200).send('Bad request');
			}
		} catch (error) {
			res.status(400).send('Error: ' + error);
		}
	},
};
