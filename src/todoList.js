import React from 'react'
import TodoForm from './TodoForm'
import ShortId from 'shortid'

/*
  Todo List Features : 
  1. Add Todo
  2. Display TodoList
  3. Cross Off Todos
  4. Show Number of Active Todos
  5. FIlter all/active/complete
  6. Delete Todos
  7. Delete All Complete
    7.1 only show if atleast one is complete
  8. Button to Toggle All On or Off
*/

export default class TodoList extends React.Component {
  state = {
    todos : []
  }

  addTodo = (todo) => {
    this.setState({
      todos : [todo, ...this.state.todos],
      id : ShortId.generate(),
      complete : false
    })
  }

  render() {
    return (
      <div>
        <TodoForm todos={this.state.todos} addTodo={this.addTodo}/>
        {this.state.todos.map((todo) => (
          <div key={todo.id}>{todo}</div>
        ))}
      </div>
    )
  }
}