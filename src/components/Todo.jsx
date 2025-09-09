import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import Checkmark from './Checkmark'

const Todo = ({id, title, completed, toggleCompleted, deleteTodo}) => {

  return (
    <tr className="border-t border-gray-300">
      <td className="ps-5 pe-2 py-1">
        <input type="checkbox" id={"check" + id} onChange={() => toggleCompleted(id)} defaultChecked={completed} className="hidden"/>
        <label htmlFor={"check" + id} className="group flex items-center">
          <Checkmark checked={completed}/>
          <span className={"py-1 ps-1 font-medium text-gray-800 truncate" + (completed ? " line-through decoration-gray-600" : "")}>{title}</span>
        </label>
      </td>
      <td className="px-2 py-2">
        {completed ? "Done" : "Pending"}
      </td>
      <td className="pe-5 ps-2 py-2">
        <button onClick={() => deleteTodo(id)} className="align-middle"><TrashIcon className="size-5" /></button>
      </td>
    </tr>
  )
}

export default Todo
