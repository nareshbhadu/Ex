import { useState } from 'react';
import './App.css';
// import About  from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, typ) => {
    setAlert({
      msg: msg,
      typ: typ
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const togg = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.background = 'white'
      document.body.style.color = 'black'
      showAlert("Dark mode is enabled", "Sucess")
    }
    else{
      setMode('dark')
      document.body.style.background = 'grey'
      document.body.style.color = 'white'
      showAlert("Light mode is enabled", "Sucess")
    }
  }

  return (
    <>
      <NavBar title="Navigation" mode={mode} tog = {togg}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
