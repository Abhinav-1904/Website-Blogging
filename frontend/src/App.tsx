import './App.css'
import {Signin} from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Story } from './pages/Story'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup></Signup>}/>
      <Route path='/signin' element={<Signin></Signin>}/>
      <Route path='/blog/:id' element={<Blog></Blog>}/>
      <Route path='/blogs' element={<Blogs></Blogs>}/>
      <Route path='/new-story' element={<Story></Story>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
