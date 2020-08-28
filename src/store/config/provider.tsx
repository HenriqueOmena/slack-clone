import React, { useReducer } from 'react';
import Context, { Store as StoreGlobalProps } from './config';
import authReducer, { authStore, AuthAction } from '../auth';
import middleware from './middleware';
import notifiesReducer, { notifiesStore, NotifyAction } from '../notifies';

interface PropsBaseProvider {
  children: React.ReactNode;
}

const Provider = (props: PropsBaseProvider) => {
  const { children } = props;

  // Add Each store reducer here
  const [authState, authDispatch] = useReducer(authReducer, authStore);
  const [notifyState, notifyDispatch] = useReducer(
    notifiesReducer,
    notifiesStore
  );

  const triggerDispatches = (action: AuthAction & NotifyAction) => {
    // Put all dispatch here
    const dispatches = [authDispatch, notifyDispatch];
    for (let i = 0; i < dispatches.length; i += 1) {
      dispatches[i](action);
    }
  };

  const middlewareConstructor = (action: AuthAction & NotifyAction) => {
    middleware(action)(triggerDispatches);
  };

  const combinedReducers: StoreGlobalProps = {
    // Add state from reducer for each new store
    store: {
      ...authState,
      ...notifyState,
    },
    dispatch: middlewareConstructor,
  };

  return (
    <Context.Provider value={combinedReducers}>{children}</Context.Provider>
  );
};

export default Provider;
