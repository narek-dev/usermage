import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Compare from "./Compare";

export default function CompareContainer() {
  const entry = useSelector((state) => state.users.entry);
  const oldValues = useSelector((state) => state.users.oldValues);

  const history = useHistory();

  useEffect(() => {
    if (!entry) {
      history.push("/");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backButtonEvent = () => {
    history.push("/");
  };

  return (
    entry && (
      <Compare
        oldValues={oldValues}
        backButtonEvent={backButtonEvent}
        newValues={entry}
      />
    )
  );
}
