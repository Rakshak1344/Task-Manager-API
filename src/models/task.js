const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
        trim: true
    }, 
    completed: {
        default: false,
        type: Boolean
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
        timestamps: true
    })


var Task = mongoose.model('Task', taskSchema)

module.exports = Task