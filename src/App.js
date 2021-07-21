import React, { Component } from 'react'
import './App.css';

// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import MyInfo from './components/MyInfo';
// import ContactCard from './components/ContactCard';

import TodoItem from './components/TodoItem';
import todosData from './data/todosData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todosData
    }
  }
  render() {
    const todoComponents = this.state.todosData.map(item =>
      <TodoItem item={item} key={item.id} />)
    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    )
  }
}

// function App() {
//   const todoComponents = todosData.map(item =>
//     <TodoItem item={item} key={item.id} />)
//   return (
//     <div className="todo-list">
//       {todoComponents}
//     </div>
//   )
// }


// function App() {
//   return (
//     <div className="todo-list">
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//     </div>);
// }

export default App;
