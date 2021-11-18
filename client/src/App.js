import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Todo from './Pages/Todo'
import { Task } from './Pages/Task'
import Blank from './Pages/Blank'

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/todo/:id' element={<Task />} />
            <Route path='*' element={<Blank />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
