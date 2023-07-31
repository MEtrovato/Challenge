import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Login from './components/login';
import Register from './components/register';
import Welcome from './components/welcome';
import UserList from './components/userList';
import AdminView from './components/adminView';
import Profile from './components/profile';
import UserView from './components/userView'
import Users from './components/users';
import EditProfile from './components/editProfile';

const App = () => {
  return (
    <div>
      
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/userList" element={<UserList/>}/>
        <Route path='/adminView' element={<AdminView/>}/>
        <Route path='/userView' element={<UserView/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App;
