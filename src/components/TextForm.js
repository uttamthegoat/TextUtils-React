import React, { useState } from "react";
import TextFormBtn from "./TextFormBtn";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const upperCase = () => {
    if (Text === "") {
      props.showAlert("Enter something mofo 🐒!", "warning");
    } else {
      setText(Text.toUpperCase());
      props.showAlert("Converted to Upper Case", "success");
    }
  };
  const lowerCase = () => {
    if (Text === "") {
      props.showAlert("Enter something mofo 🐒!", "warning");
    } else {
      setText(Text.toLowerCase());
      props.showAlert("Converted to Lower Case", "success");
    }
  };
  const clearText = () => {
    if (Text === "") {
      props.showAlert("Enter something mofo", "warning");
    } else {
      setText("");
      props.showAlert("Cleared the Text Field ", "success");
    }
  };
  const noOfWords=Text.split(" ").filter((element) => element !== "").length;
  return (
    <div
      className="container-fluid"
      style={{
        color: props.mode === "dark" ? "white" : "#18203b",
      }}
    >
      <div className="container my-3">
        <label htmlFor="my-box" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control border-3 border-dark-subtle mb-3"
          placeholder="Enter the text"
          value={Text}
          rows="7"
          id="my-box"
          onChange={onChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#18203b" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <TextFormBtn btnText="upperCase" onclick={upperCase} />
        <TextFormBtn btnText="lowerCase" onclick={lowerCase} />
        <TextFormBtn btnText="clearText" onclick={clearText} />
        <div className="my-3">
          <p>Your text summary</p>
          <p>
            {noOfWords} words {Text.length} characters
          </p>
          <p>{noOfWords* 0.0016} Minutes to read</p>
        </div>
        <div className="preview">
          <h3>The preview is: </h3>
          <p>{Text.length > 0 ? Text : "Enter something to preview it here"}</p>
        </div>
      </div>
    </div>
  );
}
