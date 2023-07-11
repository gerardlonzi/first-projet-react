import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './conponent/pages/Home'
import About from './conponent/pages/About'
import Dashboard from './conponent/pages/Dashboard'
import Services from './conponent/pages/Services'
import Login from './conponent/pages/Login'
import Navbar from './conponent/pages/navbar/Navbar'
import Appointment from './conponent/pages/Dashbord-pages/Appointment'
import Dashboards from './conponent/pages/Dashbord-pages/Dashboard'
import Doctor from './conponent/pages/Dashbord-pages/Doctor'
import History from './conponent/pages/Dashbord-pages/history'
import Laboraty from './conponent/pages/Dashbord-pages/laboratory'
import Message from './conponent/pages/Dashbord-pages/message'
import Search from './conponent/pages/Dashbord-pages/search'
import Setting from './conponent/pages/Dashbord-pages/setting'



function App() {
  return(
    <div className="app">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Dashboard' element={<Dashboard />} >
              <Route path='/Dashboard/Appointment' element={<Appointment />}/>
              <Route path='/Dashboard/Dashboard' element={<Dashboards />}/>
              <Route path='/Dashboard/Doctor' element={<Doctor />}/>
              <Route path='/Dashboard/history' element={<History />}/>
              <Route path='/Dashboard/loboratory' element={<Laboraty />}/>
              <Route path='/Dashboard/message' element={<Message />}/>
              <Route path='/Dashboard/search' element={<Search />}/>
              <Route path='/Dashboard/setting' element={<Setting />}/>
          </Route>
          <Route path='/Services' element={<Services />} />
          <Route path='/Login' element={<Login />} />
      </Routes> 
    </div>  
  )
}

export default App
