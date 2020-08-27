import { createContext } from 'react';
import { authStore, Auth } from '../auth';

export interface Store {
  store: Auth;
  dispatch(obj: any): void;
}

export const initialState: Store = {
  store: {
    ...authStore,
  },
  dispatch() {
    return null;
  },
};

const Context = createContext<Store>(initialState);

export default Context;
