import {Todo} from './Todo'

export const TodoList = ({todos, toggleCompleted, deleteTodo}) => {
  return (
    <ul>
        {todos.map((todo) => (
            <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
        ))}
    </ul>
  )
}

TodoList.propTypes = {}