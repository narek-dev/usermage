import actionTypes from '../actionTypes';

export const setUsers = (users) => {
  return {
    type: actionTypes.SET_USERS,
    payload: users
  };
};

export const clearUsers = () => {
  return {
    type: actionTypes.CLEAR_USERS,
  }
}

export const setPagination = (pagination) => {
  return {
    type: actionTypes.SET_PAGINATION,
    payload: pagination
  }
}

export const removeAllUsers = () => {
    return {
        type: actionTypes.REMOVE_ALL_USERS,
    }
}

export const setEntry = (user) => {
  return {
    type: actionTypes.SET_ENTRY,
    payload: user
  }
}

export const clearEntry = () => {
  return {
    type: actionTypes.CLEAR_ENTRY
  }
}

export const changeEntryName = (field, value) => {
  return {
    type: actionTypes.CHANGE_ENTRY_NAME,
    payload: value,
    field,
  }
}

export const saveOldValues = (first_name, last_name) => {
  return {
    type: actionTypes.SAVE_OLD_VALUES,
    payload: {first_name, last_name}
  }
}

export const addEditedUser = (user) => {
  return {
    type: actionTypes.ADD_EDITED_USER,
    payload: user
  }
}

export const showModal = (user) => {
  return {
    type: actionTypes.SHOW_MODAL,
    payload: user
  }
}

export const hideModal = () => {
  return {
    type: actionTypes.HIDE_MODAL
  }
}