import React from "react";
import { Link } from "react-router-dom";
import User from './elements/User';
import s from './Single.module.css';

export default function Single(props) {
  return (
    <div className="wrapper">
      <Link to="/" className={s.backToUsers}><span>&larr;</span> Back to users</Link>
      <User data={props.data} edit={props.edit} changeName={props.changeName} saveChanges={props.saveChanges}/>
    </div>
  );
}
