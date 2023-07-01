import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Posts from './pages/Posts'
import Signup from './pages/Signup'

const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route index element={<Posts/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoute