const {Router} =require('express')
const { getToDo,saveToDo,deleteToDo,updateToDo } = require('../controllers/ToDoController')
const router = Router()

// Router to get Todo list
router.get('/',getToDo)

// Router to save Todo list
router.post('/save',saveToDo)

// Router to delete Todo list
router.post('/delete',deleteToDo)

// Router to update a todo
router.post('/update',updateToDo)


module.exports = router