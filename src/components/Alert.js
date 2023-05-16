import React from "react";

function Alert(props) {
    const Capitalise=()=>{
        const lower=props.alert.type.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)+"!"
    }
  return (
    props.alert && <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
      id="alert-message"
    >
      <strong><Capitalise/></strong>
       {" "+props.alert.msg}
    </div>
  );
}

export default Alert;
