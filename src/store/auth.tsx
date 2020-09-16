export interface Auth {
  auth: {
    user: string | null;
  };
}

export interface AuthAction {
  type: 'LOGIN' | 'LOGOUT';
  payload?: Record<string, any>;
}

export const authStore = {
  auth: {
    user: localStorage.getItem('user'),
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
          user: action.payload?.user,
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

export const LogInUser = (data: LogInUser): LogInUser => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const LogOutUser = () => {
  return {
    type: LOGOUT,
  };
};

export default authReducer;
