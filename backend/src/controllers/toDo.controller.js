const toDoModel = require('../models/toDo.model');

module.exports = {
	async create(req, res) {
		const data = req.body;
		const response = await toDoModel.create(data);
		console.log(response);
	},
	async findById(req, res) {
		const id = req.params.todoId;
		const response = await toDoModel.findById(id);
		console.log(response);
	},
};
