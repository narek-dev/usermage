import React from "react";
import s from "./Home.module.css";
import UsersList from "./elements/UsersList";
import UserModal from "./elements/UserModal/UserModal";

export default function Home({ users, userClick, modalEvents, lastElementRef, modalUser }) {
  return (
    <div className="wrapper">
      <h1 className={s.title}>Users List</h1>
      {modalUser && <UserModal user={modalUser} modalEvents={modalEvents}/>}
      <UsersList userClick={userClick} users={users} lastElementRef={lastElementRef}/>
    </div>
  );
}
