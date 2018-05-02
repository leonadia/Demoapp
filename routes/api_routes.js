var express = require('express')

var router = express.Router()
var todos = require('./api/todo_routs')


router.use('/todos', todos);


module.exports = router;