import React from 'react'
import Hero from './components/Hero/Hero'
import Reviving from './components/Revive/Reviving'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Reviving />
    </div>
  )
}

export default App
