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
    this.props.addTodo(this.state.text);
    this.setState({
      text : ''
    })
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
        <button onSubmit={this.handleSubmit}>Submit</button>
      </form>
    )
  }
} 