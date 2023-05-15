import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  function showAlert(message, type) {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  function toggleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#18203b";
      showAlert("Mode changed to dark", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Mode changed to light", "success");
    }
  }
  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </div>
  );
}

export default App;

// <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
// <Alert alert={alert} />
// <Routes>
//   <Route exact path="/" element={<TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />}/>
//   <Route exact path="/about" element={<About />}/>
// </Routes>
