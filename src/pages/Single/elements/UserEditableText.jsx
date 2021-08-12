import React from "react";

export default function UserEditableText({ value, changeName, editMode, field}) {
  return (
    <>
      {!editMode ? (
        <span>{value}</span>
      ) : (
        <input
          type="text"
          value={value}
          onInput={(e) => changeName(field, e.target.value)}
        />
      )}
    </>
  );
}
