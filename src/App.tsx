import React from 'react';
import { Header } from 'layout/header';
import { Sidebar } from 'layout/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* TODO: React-Router -> char screen */}
    </div>
  );
}

export default App;
