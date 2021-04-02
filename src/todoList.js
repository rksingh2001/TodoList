import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

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
    })
  }

  toggleComplete = (id) => {
    this.setState({
      todos : this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete : !todo.complete
          }
        } else {
          return todo;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <TodoForm todos={this.state.todos}
        addTodo={this.addTodo}/>
        {this.state.todos.map((todo) => (
          <Todo
            todo={todo} 
            key={todo.id} 
            toggleComplete={() => this.toggleComplete(todo.id)}
          />
        ))}
      </div>
    )
  }
}