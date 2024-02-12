
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] bg-gray-200'>
      <div className='bg-white p-20'>
        <AddTodo/>
        <Todos/>
      </div>
    </div>
  )
}

export default App
