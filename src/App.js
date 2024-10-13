import React from 'react'
import {BrowserRouter as Switch, Routes, Route} from 'react-router-dom'
import { Home,Services,About } from './Pages/index'


function App() {
  return (
      <Switch>
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/service' element={<Services />} />
        </Routes>
      </Switch>
  )
}

export default App