import {useState} from 'react'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import Checkmark from './Checkmark'

const Todo = ({id, title, completed, toggleCompleted, deleteTodo}) => {
  const [confirmDelete, setConfirmDelete] = useState(false); // Shows confirmation alert before deleting

  return (
    <tr className="border-t border-gray-300">
      {confirmDelete ? 
        <td colSpan={3} className="p-2 px-5 bg-red-100">
          <div className="flex gap-2">
            <TrashIcon className="size-5" />
            <p className="text-gray-800 font-medium">Are you sure to delete task?</p>
            <button className="border ms-auto text-sm rounded-md transition-all duration-300 cursor-pointer px-2 bg-gray-100 border-gray-300 shadow-sm" onClick={() => deleteTodo(id)}>Yes</button>
            <button className="border text-sm rounded-md transition-all duration-300 cursor-pointer px-2 bg-gray-100 border-gray-300 shadow-sm" onClick={() => setConfirmDelete(false)}>Cancel</button>
          </div>
        </td>
      :
        <>
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
            <button onClick={() => setConfirmDelete(true)} className="align-middle"><TrashIcon className="size-5" /></button>
          </td>
        </>
      }
    </tr>
  )
}

export default Todo
