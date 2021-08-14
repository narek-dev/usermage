import React from "react";
import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import s from "../Single.module.css";
import UserEditableText from "./UserEditableText";
import Btn from "../../../components/btn/Btn";

export default function UserInfo({ data, changeName, editMode, saveChanges }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={s.info}>
      <SwitchTransition>
        <CSSTransition
          key={toggle ? "name" : "surname"}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {toggle ? (
            <div className={s.fieldGroup}>
              <p className={s.fieldLabel}>Change the first name</p>
              <h2 className={s.name}>
                <UserEditableText
                  value={data.first_name}
                  changeName={changeName}
                  editMode={editMode}
                  field={"first_name"}
                />
              </h2>
            </div>
          ) : (
            <div className={s.fieldGroup}>
              <p className={s.fieldLabel}>Change the last name</p>
              <h2 className={s.name}>
                <UserEditableText
                  value={data.last_name}
                  changeName={changeName}
                  editMode={editMode}
                  field={"last_name"}
                />
              </h2>
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>

      <div className={s.buttons}>
        <Btn
          label="Back"
          disabled={toggle}
          type="action"
          event={() => setToggle((toggle) => !toggle)}
        />
        <Btn
          label={toggle ? "Next" : "Save"}
          type={toggle ? 'action' : 'success'}
          event={() => {
            if (toggle) {
              setToggle((toggle) => !toggle);
            } else {
              saveChanges();
            }
          }}
        />
      </div>
    </div>
  );
}
