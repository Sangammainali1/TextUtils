import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { useState } from 'react';
import React, {useState} from 'react'
import About from './components/About';
import {BrowserRouter as Router,Switch,Route,Link, Routes} from 'react-router-dom';


function App() {
  let [mode,setMode] = useState('light');  // whether dark mode is enabled or not   
let [alert,setAlert] = useState(null);  
  
let showAlert = (message,type) => {
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=> {
    setAlert(null)
  },3000)
  }



let toggleMode = ()=> {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","success")
      // document.title = 'TextUtils-DarkMode'
    }else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
      // document.title = 'TextUtils-LightMode'
    }
  }
  return (

      <>
      {/* <Routes> */}
<Navbar title = "textUtils" mode={mode} toggleMode = {toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <switch>
  <Route path="/about">
    <About/>
  </Route> */}


  {/* <Route path="/"> */}
  <TextForm  showAlert = {showAlert} heading = "Enter the text to analyze" mode={mode}/>
{/* 
//   </Route> */}
{/* // </switch> */}



{/* <About/> */}
</div>
{/* </Routes> */}
      </>
  );
}

export default App;
