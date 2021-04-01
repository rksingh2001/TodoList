import React from 'react'

export default class TodoForm extends React.Component {
  state = {
    text : '',
  }

  handleChange = (event) => {
    this.setState({
      text : event.target.value
    })
  }

  // Not finished
  handleSubmit = (event) => {
    event.preventDefault();
    let newTodos = [this.state.text];
    if (this.state.todos)
      newTodos = newTodos.concat(this.state.todos);
    this.setState({
      todos : newTodos
    })
    this.setState({
      text : ''
    })
    console.log(JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Todo" 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.text}
        />
      </form>
    )
  }
} 