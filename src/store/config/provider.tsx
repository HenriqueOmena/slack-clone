import React, { useReducer } from 'react';
import Context, { Store as StoreGlobalProps } from './config';
import authReducer, { authStore, AuthAction } from '../auth';
import middleware from './middleware';

interface PropsBaseProvider {
  children: React.ReactNode;
}

const Provider = (props: PropsBaseProvider) => {
  const { children } = props;

  // Add Each store reducer here
  const [authState, authDispatch] = useReducer(authReducer, authStore);

  const trigglerDispatchs = (action: AuthAction) => {
    // Put all dispatch here
    const dispatchs = [authDispatch];
    for (let i = 0; i < dispatchs.length; i += 1) {
      dispatchs[i](action);
    }
  };

  const middlewareConstructor = (action: AuthAction) => {
    middleware(action)(trigglerDispatchs);
  };

  const combinedReducers: StoreGlobalProps = {
    // Add state from reducer for each new store
    store: {
      ...authState,
    },
    dispatch: middlewareConstructor,
  };

  return (
    <Context.Provider value={combinedReducers}>{children}</Context.Provider>
  );
};

export default Provider;
