import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { delTask , updateItem } from '../redux/action'
import Edit from './Edit'
const TaskItem = ({ task, tas }) => {
  const [todoDescription, setTodoDescription] = useState('')
  const dispatch = useDispatch()

  return (
    <div className="div3">
      <form className="form3">
        <input
          type="text"
          value={task.Description}
          onChange={(e) => setTodoDescription(e.target.value)}
          className={task.isDone ? 'compt' : null}
        />

        <button
          
          onClick={() => {
            dispatch(delTask(task.id))
          }}
        >Delet</button>
        <button
          
          onClick={() => dispatch(updateItem(task.id))}
        >Complet</button>
        <Edit task={task} />
      </form>
    </div>
  )
}

export default TaskItem
