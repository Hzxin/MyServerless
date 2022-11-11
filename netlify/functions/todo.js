import fetch from 'node-fetch'

export const handler = async (event, context) => {
  const TODO_API = 'https://cs3219-todo.herokuapp.com/api/todo/all' 

  const response = await fetch(TODO_API)
  const data = await response.json()
  const newList = []
  data.todos.forEach(function(obj) { if (obj.status === "Undone") newList.push(obj) });
  console.log(newList)
  return {
    statusCode: 200,
    body: JSON.stringify({
       UndoneTodo: newList
    })
  }
}