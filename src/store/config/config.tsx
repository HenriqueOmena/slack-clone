import { createContext } from 'react';
import { authStore, Auth } from '../auth';
import { notifiesStore, Notify } from '../notifies';

export interface Store {
  store: Auth & Notify;
  dispatch(obj: any): void;
}

export const initialState: Store = {
  store: {
    ...authStore,
    ...notifiesStore,
  },
  dispatch() {
    return null;
  },
};

const Context = createContext<Store>(initialState);

export default Context;
