import type { ActionUser, UsersState } from './type/type';

const initialState: UsersState = {
  user: undefined,
};

const authReducer = (state: UsersState = initialState, action: ActionUser): UsersState => {
  switch (action.type) {
    case 'users/registration':
      return {
        ...state,
        user: action.payload,
      };
    case 'users/login':
      return {
        ...state,
        user: action.payload,
      };
    case 'users/logout':
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
