import React from 'react';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default withLDProvider({
  clientSideID: '5cdaf567e8fca9082b8dfcb1'
})(App);
