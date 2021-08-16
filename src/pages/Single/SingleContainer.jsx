import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeEntryName, saveOldValues } from "../../store/actions/users";
import { changeUserAsync } from "../../store/actions/usersAsync";
import Single from "./Single";

export default function SingleContainer() {
  const entry = useSelector( state => state.users.entry );
  const [changed, setChanged] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!entry) {
      history.push("/users");
      return;
    }
    dispatch( saveOldValues( entry.first_name, entry.last_name ) );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeName = (field, value) => {  
    dispatch(changeEntryName(field, value));
    setChanged(true);
  };

  const saveChanges = () => {
    dispatch(changeUserAsync(entry));
    history.push('/confirmation')
  }

  return (
    entry && (
      <Single
        data={entry}
        edit={true}
        changed={changed}
        changeName = {changeName}
        saveChanges = {saveChanges}
      />
    )
  );
}
