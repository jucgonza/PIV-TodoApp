import { useState } from 'react';
import './App.css'
import {TodoList} from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="mx-auto my-5 w-[90%] sm:w-[80%] max-w-[1000px]">
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
