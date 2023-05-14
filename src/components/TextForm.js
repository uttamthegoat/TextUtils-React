import React, { useState } from "react";
import TextFormBtn from "./TextFormBtn";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const upperCase = () => {
    setText(Text.toUpperCase());
  };
  const lowerCase = () => {
    setText(Text.toLowerCase());
  };
  const clearText = () => {
    setText("");
  };
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
            {Text === "" ? 0 : Text.split(" ").length} words {Text.length}{" "}
            characters
          </p>
        </div>
        <div className="preview">
          <h3>The preview is: </h3>
          <p>{Text.length > 0 ? Text : "Enter something to preview it here"}</p>
        </div>
      </div>
    </div>
  );
}
