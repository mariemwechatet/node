

import TaskItem from './TaskItem'

const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((el, i) => (
        <TaskItem task={el} key={i}  />
      ))}
    </div>
  )
}

export default TaskList
