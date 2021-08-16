import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../../components/btn/Btn";
import s from "../Single.module.css";

export default function Footer({ changed, saveChanges }) {
  return (
    <div className={s.footer}>
      <Link className={s.footerButton} to="/users">
        &lt; Back to list
      </Link>

      <Btn
        label="Save Changes"
        type="action"
        disabled={!changed}
        event={saveChanges}
      />
    </div>
  );
}
