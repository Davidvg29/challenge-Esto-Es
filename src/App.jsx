import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddProject from './components/addProject/AddProject'
import EditProject from './components/editProject/EditProject'
import Header from './components/header/Header'
import MyProjects from './components/myProjects/MyProjects'
import PageNotFound from './components/pageNotFound/PageNotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MyProjects/>} />
        <Route path='/add project' element={<AddProject/>} />
        <Route path='/edit project' element={<EditProject/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App
