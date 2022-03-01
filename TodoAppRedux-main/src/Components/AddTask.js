import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action'
const AddTask = () => {
  const [todoDescription, setTodoDescription] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <div className="div1">
        <input
          className="inp"
          variant="outlined"
          label="To Do Item"
          fullWidth
          onChange={(e) => setTodoDescription(e.target.value)}
          value={todoDescription}
        />
        <button
          onClick={() => {
            dispatch(addTask(todoDescription))
            setTodoDescription('')
          }}
        >Add</button>
      </div>
      <div></div>
    </div>
  )
}

export default AddTask
