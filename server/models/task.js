const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let taskSchema = new Schema({
    description: {
      type: String,
      required: [true, 'The description is required']
    },
    notes:{
        type: String,
        required: false
    },
    type:{
        type: String, 
        enum: ['TOP', 'HIGH', 'MEDIUM', 'LOW'],
        default: 'MEDIUM'
    },
    status: {
        type: String,
        enum: ['TODO', 'DONE', 'INPROCESS'],
        default: 'TODO'
    }
});


taskSchema.plugin( uniqueValidator, {
    message: '{PATH} must to be required'
});

module.exports = mongoose.model('Task', taskSchema);