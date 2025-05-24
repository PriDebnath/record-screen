import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recorder from './recorder'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center gap-2'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Record Screen by Pritam</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div className="flex justify-center">
        <Recorder />
      </div>

    </>
  )
}

export default App
