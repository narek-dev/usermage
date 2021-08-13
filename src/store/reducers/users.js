import actionTypes from "../actionTypes";

export const initialState = {
  pagination: {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
  },
  users: [],
  entry: null,
  editedUsers: [],
  oldValues: null,
  modalUser: null,
};

/* istanbul ignore next */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      };

    case actionTypes.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    case actionTypes.SET_ENTRY:
      return {
        ...state,
        entry: action.payload,
      };

    case actionTypes.CLEAR_ENTRY:
      return {
        ...state,
        entry: null,
      };

    case actionTypes.CHANGE_ENTRY_NAME:
      return {
        ...state,
        entry: {
          ...state.entry,
          [action.field]: action.payload,
        },
      };

    case actionTypes.SAVE_ENTRY:
      return {
        ...state,
        users: action.payload,
      };

    case actionTypes.SAVE_OLD_VALUES:
      return {
        ...state,
        oldValues: action.payload,
      };

    case actionTypes.SET_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };

    case actionTypes.ADD_EDITED_USER:
      return {
        ...state,
        editedUsers: [...state.editedUsers, action.payload],
      };
    
    case actionTypes.SHOW_MODAL: {
      return {
        ...state,
        modalUser: action.payload
      }
    }

    case actionTypes.HIDE_MODAL: {
      return {
        ...state,
        modalUser: null
      }
    }

    default:
      return state;
  }
};

export default reducer;
