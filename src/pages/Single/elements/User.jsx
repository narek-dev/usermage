import React from "react";
import s from "../Single.module.css";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";
import UserEditButton from './UserEditButton';

export default function User({data, edit, changeName}) {
  return (
    <div className={s.container}>
      <UserImage avatar={data.avatar} />
      <UserInfo data={data} changeName={changeName} editMode={edit.value} />
      <UserEditButton
        additionalClass={edit.value ? " " + s.activeEdit : ""}
        event={() => edit.setValue(!edit.value)}
      />
    </div>
  );
}
