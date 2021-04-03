import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <div 
          style={{
            fontSize : "30px",
            color : this.props.todo.complete ? "red" : (this.props.todo.starred ? "cyan" : "limegreen"),
            textDecoration : this.props.todo.complete ? "line-through" : ""
          }}
        >
          <font onClick={this.props.toggleComplete}>
            {this.props.todo.text}
          </font>
          <button onClick={this.props.deleteTodo}>X</button>
          <button onClick={console.log('clicked')}>star</button>
        </div>
      </div>
    )
  }
}