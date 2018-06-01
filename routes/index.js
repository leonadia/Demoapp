var express = require('express');
var app = express();
var router = express.Router();
bodyParser = require('body-parser')
var todo = require('../controller/todo_controller');
var ejs = require('ejs')

//app.set('view engine', 'ejs');
//app.use(express.static('public'));
router.get('/', function (req, res) {
    res.render("../views/index.ejs")
})

router.get('/process_get', function (req, res) {

  try {
    var createTodo = todo.createTodo(req,res);
    res.render(createTodo);
  } 
  catch(e)
  {
    res.render(createTodo);
  }
   console.log(response);
   res.end(JSON.stringify(response));
})

module.exports = router;
