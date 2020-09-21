import React, { useContext } from 'react';
import { Header } from 'layout/header';
import { Sidebar } from 'layout/sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from 'components/chat/chat';
import AppStyle from 'App.styles';
import Context from 'store/config/config';
import { Login } from 'Pages/login';

const App: React.FC = () => {
  const classes = AppStyle();
  const {
    store: {
      auth: { user },
    },
  } = useContext(Context);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className={classes.content}>
              <Sidebar />
              <Switch>
                <Route path="/channel/:idChannel">
                  <Chat />
                </Route>
                <Route path="/">=)</Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
