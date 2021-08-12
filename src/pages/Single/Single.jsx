import React from "react";
import Footer from "./elements/Footer";
import User from './elements/User';

export default function Single(props) {
  return (
    <div className="wrapper">
      <User data={props.data} edit={props.edit} changeName={props.changeName} />
      <Footer changed={props.changed} saveChanges={props.saveChanges} />
    </div>
  );
}
