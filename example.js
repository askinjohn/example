const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

const todos = ['Deploy in Heroku', 'Change URL']
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});


app.get('/todos', (req, res) => {
  console.log('Someone requested TODOS')
  res
    .status(200)
    .send({
      status: "SUCCESS", 
      data: todos
    })
})

app.post('/todos', (req, res) => {
  console.log('New Todo to be added');
  const body = req.body;
  if(!body) {
    res
    .status(400)
    .send({
      status: "ERROR", 
      message: "Todo needs to be present to call API"
    })
    return;
  }
  const todo = body.todo;
  if(!todo) {
    res
    .status(400)
    .send({
      status: "ERROR", 
      message: "Todo needs to be present to call API"
    })
    return;
  }
  todos.push(todo);
  res.status(200).send({status: "SUCCESS"})
})

app.listen(3000, () => {
  console.log('server started');
});