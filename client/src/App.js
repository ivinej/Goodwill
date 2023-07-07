import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Login from './Pages/Register';
import Landing from './Pages/Landing';
import Login1 from './Pages/Login1';
import Splogin from './Pages/Splogin';
import Userhome from './Pages/Userhome';
import Studhome from './Pages/Studenthome/Studhome';
import Nav2 from './Components/Nav2';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Landing}/>
          <Route path="/login" Component={Login}/>
          <Route path="/Login1" Component={Login1}/>
          <Route path="/Splogin" Component={Splogin}/>
          <Route path="/Studhome" Component={Nav2}>
          <Route path="/Studhome/sponsorships" Component={Userhome}/>
          {/* <Route path="/Studhome/internship" Component={Userhome}/>
          <Route path="/Studhome/feed" Component={Userhome}/>  */}
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
