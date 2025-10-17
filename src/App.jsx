import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componants/Navbar/Navbar'
import Sidebar from './componants/Sidebar/Sidebar'
import AllRoutes from './AllRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar />
      <Sidebar /> */}
      <AllRoutes />
    </>
  )
}

export default App
