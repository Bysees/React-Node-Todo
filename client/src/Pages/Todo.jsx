import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ApiService } from '../ApiService'

const Todo = () => {
  const [tasks, setTasks] = useState([])
  const typedTask = useRef('')

  const getTasks = async () => {
    const respone = await ApiService.getTasks()
    setTasks(respone.data.todo)
  }

  useEffect(() => getTasks(), [])

  const addTask = async () => {
    const taskValue = typedTask.current.value
    const response = await ApiService.createTask(taskValue)

    const addedTask = {
      task: taskValue,
      id: response.data.task.id,
      important: response.data.task.important,
    }
    setTasks([...tasks, addedTask])
    typedTask.current.value = ''
  }

  const delTask = async (id) => {
    await ApiService.deleteTask(id)
    setTasks(tasks.filter((item) => item.id !== id))
  }

  const addTaskKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className='todo'>
      <h1 className='title'>TODO List</h1>
      <div>
        <input
          className='type-task'
          type='text'
          placeholder='Type task...'
          ref={typedTask}
          onKeyDown={addTaskKeyDown}
        />
        <button onClick={addTask} className='add-task'>
          Add task
        </button>
      </div>
      <div className='todo-wrapper'>
        {tasks.map((item, i) => {
          return (
            <div key={item.id} className='todo-row'>
              <div className='todo-task'>
                <Link to={`/todo/${item.id}`}>- {item.task}</Link>
              </div>
              <div className='todo-important'>{item.important && '!'}</div>
              <button onClick={() => delTask(item.id)} className='del-task'>
                Del
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo
