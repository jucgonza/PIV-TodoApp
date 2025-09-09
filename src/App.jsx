import { useState } from 'react';
import './App.css'
import {TodoList} from './components/TodoList';
// import PlusIcon from '@heroicons/react/24/solid/PlusIcon'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter( i => i.id != id));
  }

  const toggleCompleted = (id) => {
    setTodos(todos.map(i => {
      if(i.id == id){
        i.completed = !i.completed;
      }
      return i;
    }))
  }

  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    if (title.trim() === '') return;
    addTodo(title);
    e.target[0].value = '';
  }

  return (
    <>

      <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />

      <form onSubmit={submitForm}>
        <input type="text" placeholder="¿Qué quieres hacer?" />
        <button>Añadir</button>
      </form>
    </>
  )
}

export default App
