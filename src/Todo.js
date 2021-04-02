import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <div 
          style={{
            fontSize : "30px",
            color : this.props.todo.complete ? "red" : "limegreen",
            textDecoration : this.props.todo.complete ? "line-through" : ""
          }}
          onClick={this.props.toggleComplete}
        >
          {this.props.todo.text}
        </div>
          <button onClick={this.props.deleteTodo}>X</button>
      </div>
    )
  }
}