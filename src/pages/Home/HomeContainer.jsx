import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import { clearEntry, setEntry} from "../../store/actions/users";
import { useHistory } from "react-router";
import { setUsersAsync } from "../../store/actions/usersAsync";

export default function HomeContainer() {
  const state = useSelector((state) => state.users);
  const users = state.users;

  const dispatch = useDispatch();
  const history = useHistory();

  const singleUserClickEvent = (user) => {
    dispatch(setEntry(user));
    history.push(`/single/${user.id}`);
  };

  const changePage = (page) => {
    dispatch( setUsersAsync(page));
  };

  const pagination = {
    currentPage: state.pagination.page,
    totalPages: state.pagination.total_pages,
    changePage,
  };


  useEffect( () => {
    dispatch( clearEntry() );
    dispatch( setUsersAsync() );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Home users={users} userClick={singleUserClickEvent} pagination={pagination}/>;
}
