import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Login from './Pages/Register';
import Landing from './Pages/Landing';
import Login1 from './Pages/Login1';
import Splogin from './Pages/Splogin';
import Userhome from './Pages/Userhome';
import Studhome from './Pages/Studenthome/Studhome';
import Nav2 from './Components/Nav2';
import Role from './Pages/Role';
import './App.css';
import Sponal from './Pages/Sponal';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Landing}/>
          {/* <Route path="/login" Component={Login}/> */}
          {/* <Route path="/Login1" Component={Login1}/>
          <Route path="/Splogin" Component={Splogin}/> */}
          <Route path="/login/role/student" element={<Login1/>} />
          <Route path="/login/role/alumni" element={<Login1/>} />
          <Route path="/signup/role/student" element={<Login/>} />
          <Route path="/signup/role/alumni" element={<Login/>} />
          <Route path="/login/role" element={<Role/>} />
          <Route path="/signup/role" element={<Role/>} />
          <Route path="/Studhome" Component={Nav2}>
          
          <Route path="/Studhome/sponsorships" Component={Userhome}/>
          <Route path="/Studhome/internships" Component={Sponal}/>
          {/* <Route path="/Studhome/feed" Component={Userhome}/>  */} 
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
