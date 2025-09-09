import Todo from './Todo'
import PlusIcon from '@heroicons/react/24/outline/PlusIcon'

export const TodoList = ({todos, setTodos}) => {

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
    <table className="table-fixed w-full" id="todo-list">
      <thead>
        <tr>
          <td className="py-1"><span className="text-sm font-medium text-gray-500">Name</span></td>
          <td className="px-2 py-1 w-[100px]"><span className="text-sm font-medium text-gray-500">Status</span></td>
          <td className="px-2 py-1 w-[70px]"><span className="text-sm font-medium text-gray-500">Action</span></td>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
        ))}

        <tr className="border-t border-gray-300">
          <td colSpan={3} className="px-5 py-1">
            <form onSubmit={submitForm} className="flex items-center" id="add-new-task">
              <div className="w-[26px] h-[26px] flex items-center justify-center">
                <PlusIcon className="size-5 stroke-2" />
              </div>
              <input type="text" placeholder={todos.length ? "Add task" : "Todo list's empty. Add new task..."} className="py-1 ps-1 font-medium text-gray-800 flex-1 focus:outline-gray-200"/>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

TodoList.propTypes = {}