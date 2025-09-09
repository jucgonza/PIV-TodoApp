export const Todo = ({id, title, completed, toggleCompleted, deleteTodo}) => {

  return (
    <div>
      <label>
        <input type="checkbox" id={"check" + id} onChange={() => toggleCompleted(id)} defaultChecked={completed}/>
        <span>{title}</span>
      </label>
      <button onClick={() => deleteTodo(id)}>Eliminar</button>
    </div>
  )
}
