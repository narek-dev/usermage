import React from "react";
import s from "../Single.module.css";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";

export default function User({data, edit, changeName}) {
  return (
    <div className={s.container}>
      <UserImage avatar={data.avatar} />
      <UserInfo data={data} changeName={changeName} editMode={edit} />
    </div>
  );
}
