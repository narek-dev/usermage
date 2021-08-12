import React from "react";
import s from "./Home.module.css";
import UsersList from "./elements/UsersList";
import Pagination from "../../components/pagination/Pagination";

export default function Home({ users, userClick, pagination }) {
  return (
    <div className="wrapper">
      <h1 className={s.title}>Users List</h1>
      <UsersList userClick={userClick} users={users} />
      <Pagination
        pagescount={pagination.totalPages}
        currentPage={pagination.currentPage}
        event={(page) => pagination.changePage(page)}
      />
    </div>
  );
}
