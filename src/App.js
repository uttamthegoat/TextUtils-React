import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState("light");
  function toggleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor='#18203b';
    } else {
      setmode("light");
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <div className="App">
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm heading="Enter the Text to analyse" mode={mode}/>
      {/* <About/> */}
    </div>
  );
}

export default App;
