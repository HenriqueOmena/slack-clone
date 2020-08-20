import React from 'react';
import { Header } from 'layout/header';
import { Sidebar } from 'layout/sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from 'components/chat/chat';
import AppStyle from 'App.styles';

function App() {
  const classes = AppStyle();
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
