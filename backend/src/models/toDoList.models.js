const mongoose = require('mongoose');

const toDoListModel = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 1,
		},
		toDos: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'ToDo',
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('ToDoList', toDoListModel);
