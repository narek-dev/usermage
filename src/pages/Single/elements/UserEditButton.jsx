import React from "react";
import s from "../Single.module.css";
import editIcon from "../../../assets/images/icons/edit.svg";

export default function UserEditButton({event, additionalClass =''}) {
    return (
        <button
          className={s.editButton + additionalClass}
          onClick={() => event()}
        >
          <img src={editIcon} alt="edit" />
        </button>
    )
}
