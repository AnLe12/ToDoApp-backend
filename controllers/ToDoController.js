const TodoModel = require('../models/ToDoModels')

// [GET] /
module.exports.getToDo =  async(req,res) =>{
    const todo = await TodoModel.find()
    res.send(todo)
}

// [POST] /save
module.exports.saveToDo = async(req, res) =>{
    const {content} = req.body
    TodoModel
        .create({content})
        .then((data) => {
            console.log("Added Successfully")
            console.log(data)
            res.send(data)
        })
}
// [POST] /delete
module.exports.deleteToDo =  async(req, res) =>{
    const {_id} = req.body
    TodoModel
        .findByIdAndDelete(_id)
        .then(() => { res.send('Delete successfully')
        })
        .catch(e => console.log(e))
}

// [POST] /update
module.exports.updateToDo = async(req, res) =>{
    const {_id, content} = req.body
    TodoModel
        .findByIdAndUpdate(_id, {content})
        .then(() => { res.send('Update successfully')})
        .catch(e => console.log(e))
}