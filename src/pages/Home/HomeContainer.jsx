import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import {
  clearEntry,
  clearUsers,
  hideModal,
  setEntry,
  showModal,
} from "../../store/actions/users";
import { useHistory } from "react-router";
import {
  getSingleUserAsync,
  setUsersAsync,
} from "../../store/actions/usersAsync";
import { useQuery } from "../../helpers/functions";

export default function HomeContainer() {
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const state = useSelector((state) => state.users);
  const users = state.users;
  const modalUser = state.modalUser;

  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();

  const singleUserClickEvent = (user) => {
    dispatch(showModal(user));
    history.push(`/?id=${user.id}`);
  };

  const closeModalClick = () => {
    dispatch(hideModal());
  };


  const modalEditClick = (user) => {
    dispatch(setEntry(user));
    dispatch(hideModal());
    history.push(`/single/${user.id}`);
  };

  const checkUrlId = () => {
    if (query.get("id")) {
      dispatch(getSingleUserAsync(query.get("id")));
    }
  };

  useEffect(() => {
    setHasMore(state.pagination.page < state.pagination.total_pages);
  },[state.pagination.page, state.pagination.total_pages])

  const loadUsers = (page = 1) => {
    setisLoading(true);
    dispatch(setUsersAsync(page)).then(() => {
      setisLoading(false);
    })
  };

  useEffect( () => {
    dispatch( clearEntry() );
    dispatch( clearUsers() );
    checkUrlId();
    loadUsers( 1 );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadUsers(state.pagination.page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasMore, users, state.pagination.page]
  );

  return (
    <Home
      users={users}
      userClick={singleUserClickEvent}
      lastElementRef={lastElementRef}
      modalUser={modalUser}
      modalEvents={{
        close: closeModalClick,
        action: modalEditClick,
      }}
      isLoading={isLoading}
    />
  );
}
