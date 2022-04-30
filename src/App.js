import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar state = {props.state.friends} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path = '/profile' element ={<Profile profilePage = {props.state.profilePage} dispatch = {props.dispatch}/>}/>
          <Route path = '/dialogs/*' element ={<Dialogs dialogsPage ={props.state.dialogsPage} dispatch = {props.dispatch}/>}/>
          <Route path = '/news' element ={<News state = {props.state.newsPage}/>}/>
          <Route path = '/music' element ={<Music />}/>
          <Route path = '/settings' element ={<Settings />}/>
          <Route path='/friends' element = {<Friends state = {props.state.friends}/>}/>
        </Routes>
      
      </div>
     
       
    </div>
    </BrowserRouter>
  );
};

export default App;
