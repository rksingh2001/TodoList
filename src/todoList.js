import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

/*
  Todo List Features : 
  1. Add Todo
  2. Display TodoList
  3. Cross Off Todos
  4. Show Number of Active Todos
  5. Filter all/active/complete
  6. Delete Todos
  7. Delete All Complete
    7.1 only show if atleast one is complete
  8. Button to Toggle All On or Off
*/

export default class TodoList extends React.Component {
  state = {
    todos : [],
    todoFilter : 'All',
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

  updateFilter = (filter) => {
    this.setState({
      todoFilter : filter
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos : this.state.todos.filter(todo => id !== todo.id)
    })
  }

  deleteAllTodos = () => {
    this.setState({
      todos : this.state.todos.filter(todo => !todo.complete)
    })
  }

  render() {
    let todos = [];
    if (this.state.todoFilter === 'All') todos = this.state.todos;
    if (this.state.todoFilter === 'Active') todos = this.state.todos.filter(todo => !todo.complete);
    if (this.state.todoFilter === 'Complete') todos = this.state.todos.filter(todo => todo.complete);

    return (
      <div>
        <TodoForm todos={this.state.todos} addTodo={this.addTodo}/>
        <div style={{color : 'limegreen'}}>Active : {this.state.todos.filter(todo => !todo.complete).length}</div>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id} 
            toggleComplete={() => this.toggleComplete(todo.id)}
            deleteTodo={() => this.deleteTodo(todo.id)}
          />
        ))}
        <div>
          <button onClick={() => this.updateFilter('All')}>All</button>
          <button onClick={() => this.updateFilter('Active')}>Active</button>
          <button onClick={() => this.updateFilter('Complete')}>Complete</button>
        </div>
        <div>
        {this.state.todos.filter(todo => todo.complete).length ?
            (
              <button onClick={this.deleteAllTodos}>Delete Completed Todos</button>
            ) : null}
        </div>
      </div>
    )
  }
}