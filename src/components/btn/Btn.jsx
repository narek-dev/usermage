import React from "react";
import s from './Btn.module.css';

export default function Btn(props) {
  return (
    <button
      disabled={props.disabled}
      className={s.btn + " " + s[props.type]}
      onClick={() => props.event()}
      style={{...props.style}}
    >
      {props.label}
    </button>
  );
}
