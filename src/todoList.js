import React from 'react'
import TodoForm from './todoForm'
import Todo from './todo'

/*
  TodoList
  1. add Todo
  2. display todos
  3. cross off todos
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. butoon to toggle all on/off
*/

export default class TodoList extends React.Component {
  state = {
    todos : []
  };

  addTodo = (todo) => {
    const newTodo = [todo, ...this.state.todos];
    this.setState({
      todos : newTodo
    });
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </div>
    )
  }
}