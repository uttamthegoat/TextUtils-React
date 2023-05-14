import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null)
  
  function showAlert(message,type){
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  };
  function toggleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#18203b";
      showAlert(" Mode changed to dark","success")
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Mode changed to light","success")
    }
  }
  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the Text to analyse" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </div>
  );
}

export default App;
