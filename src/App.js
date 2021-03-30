import React from 'react'
import './index.css';
import TodoList from './todoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;