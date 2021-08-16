import React from "react";
import s from "./Home.module.css";
import UsersList from "./elements/UsersList";
import UserModal from "./elements/UserModal/UserModal";
import { CSSTransition } from "react-transition-group";
import Loader from "../../components/Loader";

export default function Home({
  users,
  userClick,
  modalEvents,
  lastElementRef,
  modalUser,
  isLoading
}) {
  return (
    <div className="wrapper">
      <h1 className={s.title}>Users List</h1>

      <CSSTransition
        in={modalUser != null}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <UserModal user={modalUser} modalEvents={modalEvents} />
      </CSSTransition>

      <UsersList
        userClick={userClick}
        users={users}
        lastElementRef={lastElementRef}
      />

      {isLoading && <Loader />}
    </div>
  );
}
