const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    content: { type: String, require: true}
})

module.exports = mongoose.model('Todo', todoSchema)