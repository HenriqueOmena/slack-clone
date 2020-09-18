import { User } from 'firebase';

export interface Auth {
  auth: {
    user?: User;
  };
}

export interface AuthAction {
  type: 'LOGIN' | 'LOGOUT';
  payload?: any;
}

export const authStore = {
  auth: {
    user: undefined,
  },
};

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const authReducer = (state = authStore, action: AuthAction) => {
  switch (action.type) {
    case LOGIN:
      return {
        auth: {
          ...state.auth,
          user: action.payload,
        },
      };

    case LOGOUT:
      localStorage.removeItem('user');
      return {
        auth: {
          ...state.auth,
          user: '',
        },
      };

    default:
      return state;
  }
};

type LogInUser = Record<string, unknown> | null;

export const LogInUser = (user: User | null): LogInUser => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const LogOutUser = () => {
  return {
    type: LOGOUT,
  };
};

export default authReducer;
