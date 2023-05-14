import React from "react";

export default function TextFormBtn(props) {
  return (
    <button onClick={props.onclick} className="btn btn-outline-danger me-2">
      {props.btnText}
    </button>
  );
}
