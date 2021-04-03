import React from 'react'
import './index.css';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    return (
      <center>
      <TodoList />
      </center>
    );
  }
}

export default App;