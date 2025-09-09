import { useState } from 'react'
import TodoList from './components/TodoList'
import FilterButton from './components/FilterButton'
import ArrowTrendingUpIcon from '@heroicons/react/24/outline/ArrowTrendingUpIcon'
import './App.css'


function App() {

  const [todos, setTodos] = useState([]); // List of all todos
  const [activeFilter, setActiveFilter] = useState(''); // Currently active filter or empty for no filter

  // Modifies "show" property to show filtered todos
  const changeFilter = (filter) => {
    // If filter equals currently active filter then filters are reset to show all
    if(filter === activeFilter){
      filter = '';
    }
    setActiveFilter(filter)

    if(filter === 'pendingFilter'){ // Show Pending
      setTodos(todos.map(i => {
        i.show = !i.completed;
        return i;
      }))
    }else if(filter === 'completedFilter'){ // Show Completed
      setTodos(todos.map(i => {
        i.show = i.completed;
        return i;
      }))
    }else{ // Reset to show all
      setTodos(todos.map(i => {
        i.show = true;
        return i;
      }))
    }
  }

  return (
    <div className="mx-auto my-5 w-[90%] sm:w-[80%] max-w-[1000px]">

      {/* Statistics and filters */}
      <p className="my-2 flex items-center gap-2">
        <ArrowTrendingUpIcon className="size-5 flex-none text-gray-600"/>
        <span className="text-gray-800">
          <FilterButton id="completedFilter" activeFilter={activeFilter} changeFilter={changeFilter}>{todos.filter(i => i.completed).length} completed</FilterButton>, <FilterButton id="pendingFilter" activeFilter={activeFilter} changeFilter={changeFilter}>{todos.filter(i => !i.completed).length} pending</FilterButton> out of {todos.length} tasks
        </span>
      </p>

      {/* List of todos */}
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
