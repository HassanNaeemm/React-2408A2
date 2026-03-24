import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Cards from './components/Cards';
import UsersData from './components/JSON/users.json';
import Contact from './components/Contact';
import Api from './components/Api';
import AuthGuard from './components/AuthGuard';
import { MyValue } from './components/TestContext';
import { setTheme, Theme } from './components/ThemeContext';
import { useState } from 'react';
import MotionFramer from './components/MotionFramer';
function App() {
  // Array of Objects
  
 let [MyTheme,SetTheme] = useState("white")

  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    

   <Theme.Provider value={{MyTheme,SetTheme}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      
        <Route path='/contact' element={
          <AuthGuard>
          <Contact/>
          </AuthGuard>
          }/>
        <Route path='/api' element={
          <AuthGuard>
          <Api/>
          </AuthGuard>
        }/>
      
      <Route path='/depart' element={<Cards data={UsersData}/>}/>
    <Route path='/animations' element={<MotionFramer/>}/>
    </Routes>
   </Theme.Provider>
      
    
    <Footer/>
   </>
  );
}

export default App;
