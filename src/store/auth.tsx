export interface Auth {
  auth: {
    user: string | null;
    email: string | null;
  };
}

export interface AuthAction {
  type: 'LOGIN' | 'LOGOUT';
  payload?: Record<string, any>;
}

export const authStore = {
  auth: {
    user: localStorage.getItem('user'),
    email: localStorage.getItem('email'),
  },
};

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const authReducer = (state = authStore, action: AuthAction) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('user', action.payload?.user);
      localStorage.setItem('email', action.payload?.email);
      return {
        auth: {
          ...state.auth,
          user: action.payload?.user,
          email: action.payload?.email,
        },
      };

    case LOGOUT:
      localStorage.removeItem('user');
      return {
        auth: {
          ...state.auth,
          user: '',
          email: '',
        },
      };

    default:
      return state;
  }
};

interface ResponseI {
  additionalUserInfo: {};
  credential: {};
  operationType: {};
  user: {};
}

export const LogInUser = (data: ResponseI) => {
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
