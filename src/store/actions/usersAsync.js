import { addEditedUser, setEntry, setPagination, setUsers, showModal } from "./users";
import * as api from "../../helpers/api";
import { mergeUsers } from "../../helpers/functions";

export const setUsersAsync = (page = 1) => {
  return async (dispatch, getState) => {
    const editedUsers = getState().users.editedUsers;
    const data = await api.getData(page);
    let users = [];

    if (editedUsers.length > 0) {
      users = mergeUsers(editedUsers, data.data);
    } else {
      users = data.data;
    }

    const pagination = {
      page: data.page,
      per_page: data.per_page,
      total: data.total,
      total_pages: data.total_pages,
    };


    dispatch(setPagination(pagination));
    console.log(getState().users.pagination);

    dispatch( setUsers(users) );
    return new Promise(res => res(true));

  };
};

export const changeUserAsync = (user) => async (dispatch) => {
  try {
    const data = {
      first_name: user.first_name,
      last_name: user.last_name,
    };

    const result = await api.changeData(data, user.id);
    dispatch(addEditedUser({ ...user, ...result }));
    dispatch(setEntry({ ...user, ...result }));
  } catch (err) {
    console.error(err);
    // Now our API works without any error messages,
    // but when our server will return any message about status,
    // I will create an error notification method.
  }
};

export const getSingleUserAsync = (id) => async (dispatch) => {
  try {
    const user = await api.getSingleUser(id);
    dispatch(showModal(user));
  } catch (err) {
    console.error(err);
  }
}