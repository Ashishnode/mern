import React from 'react'
import {BrowserRouter as Switch, Routes, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
      <Switch>
        <Routes>
         <Route path='/' element={<Home />} />
        </Routes>
      </Switch>
  )
}

export default App