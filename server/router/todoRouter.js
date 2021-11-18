const Router = require('express')
const { getNextId, removeItemFromDB, addItemToDB } = require('../assets')
const router = new Router()
const todoPath = '../db/todo.json'
const todo = require(todoPath)

router.get('/', (req, res) => {
  return res.json({ todo })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  if (!todo.some((item) => item.id === +id)) {
    return res.status(404).json({ message: 'element not found' })
  }
  const task = todo.filter((item) => item.id === +id)[0]
  return res.json({ task })
})

router.post('/', async (req, res) => {
  const { task, important = true } = req.body
  const nextId = getNextId(todo)
  const newTask = {
    task,
    id: nextId,
    important,
  }
  try {
    addItemToDB(__dirname, todoPath, todo, newTask)
    return res.status(200).json({
      message: 'elemnent has been added',
      task: { id: nextId, task, important },
    })
  } catch (e) {
    return res.status(403).json({ message: 'elemnent has not been added' })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  if (!todo.some((item) => item.id === +id)) {
    return res.status(404).json({ message: 'element is not exist' })
  }
  removeItemFromDB(__dirname, todoPath, todo, id)
  return res.json({ id })
})

module.exports = router
