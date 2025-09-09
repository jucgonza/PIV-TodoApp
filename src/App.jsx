import { useState } from 'react';
import './App.css'
import {TodoList} from './components/TodoList';
import ArrowTrendingUpIcon from '@heroicons/react/24/outline/ArrowTrendingUpIcon'


function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="mx-auto my-5 w-[90%] sm:w-[80%] max-w-[1000px]">
      <p className="my-2 flex items-center gap-2">
        <ArrowTrendingUpIcon className="size-5 text-gray-600"/>
        <span className="text-gray-800">
          {todos.filter(i => i.completed).length} completed, {todos.filter(i => !i.completed).length} pending out of {todos.length} tasks
        </span>
      </p>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
