import React from "react";
import Btn from "../../components/btn/Btn";
import s from "./Compare.module.css";

export default function Compare({ oldValues, newValues, backButtonEvent }) {
  // oldValues.first_name , oldValues.lastName

  return (
    <div className="wrapper">
      <h1 className={s.title}>Compare the changes</h1>
      <div className={s.row}>
        <div className={s.column}>
          <div className={s.columnHeader}>
            <h4>Old Values</h4>
          </div>
          <div className={s.columnBody}>
            <h5>{oldValues.first_name}</h5>
            <h5>{oldValues.last_name}</h5>
          </div>
        </div>

        <div className={s.column}>
          <div className={s.columnHeader}>
            <h4>New Values</h4>
          </div>
          <div className={s.columnBody}>
            <h5>{newValues.first_name}</h5>
            <h5>{newValues.last_name}</h5>
          </div>
        </div>
      </div>
      <div className={s.time}>Updated in: {newValues.updatedAt}</div>

      <Btn
        label="&lt; Back to users list"
        event={() => backButtonEvent()}
        type="action"
        style={{
          width: "max-content",
          margin: "25px auto 0 auto",
          display: "block",
        }}
      />
    </div>
  );
}
