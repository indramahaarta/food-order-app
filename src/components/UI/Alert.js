import React from "react";
import ReactDOM from "react-dom";
import classes from "./Alert.module.css";
import icon from "../../assets/icons8-ok-50.png";

const Alert = (props) => {
  const alertComponent = document.getElementById("alert");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.alert} onClose={props.Close}>
          <img src={icon} alt='Checklist'></img>
          {props.message}
        </div>,
        alertComponent
      )}
    </React.Fragment>
  );
};

export default Alert;
