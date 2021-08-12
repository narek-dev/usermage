import React from "react";
import s from "../Single.module.css";
import UserEditableText from "./UserEditableText";

export default function UserInfo({data, changeName, editMode}) {
  return (
    <div className={s.info}>
      <h2 className={s.name}>
        <UserEditableText
          value={data.first_name}
          changeName={changeName}
          editMode={editMode}
          field={"first_name"}
        />
      </h2>
      <h2 className={s.name}>
        <UserEditableText
          value={data.last_name}
          changeName={changeName}
          editMode={editMode}
          field={"last_name"}
        />
      </h2>

      <p className={s.email}>{data.email}</p>
    </div>
  );
}
