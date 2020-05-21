const mongoose = require('mongoose');

const boardModel = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
			minlength: 1,
		},
		toDoLists: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'ToDoList',
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Board', boardModel);
