import React from "react";
import s from "../Single.module.css";

export default function UserImage({avatar}) {
  return (
    <div className={s.image}>
      <img src={avatar} alt={"User avatar"} />
    </div>
  );
}
