import React from 'react'
import ShortID from 'shortid'

export default class TodoForm extends React.Component {
  state = {
    text : ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id : ShortID.generate(),
      text : this.state.text,
      complete : false
    })
    this.setState({
      text : '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          placeholder="todo.."
          onChange={this.handleChange} 
          value = {this.state.text}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    ) 
  }
}