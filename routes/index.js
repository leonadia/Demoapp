var express = require('express');
var app = express();
var router = express.Router();
bodyParser = require('body-parser')
var todo = require('../controller/todo_controller');
var ejs = require('ejs')

app.set('view engine', 'ejs');
//app.use(express.static('public'));
app.get('/index', function (req, res) {
    res.render("C:/PROJECTS/NodeJs/DEMOAPP/todoapp/views/index.ejs")
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   todo_req = {
    title:req.query.title,
    description:req.query.description,
    status:req.query.status
 };
  try {
    var createTODO = todo.createTodo(todo_req,response);
    response = {
      status: 201,
      response: createTODO
    };
  } 
  catch(e)
  {
    response = "not succes";
  }
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
module.exports = router;
