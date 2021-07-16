import './App.css';

// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import MyInfo from './components/MyInfo';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>);
}

export default App;
