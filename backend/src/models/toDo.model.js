const mongoose = require('mongoose');

const toDoModel = new mongoose.Schema(
	{
		note: {
			type: String,
			required: true,
			minlength: 1,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('ToDo', toDoModel);
