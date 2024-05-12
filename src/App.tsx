import React from 'react';
import './App.css';
import InfiniteList from "./components/InfiniteList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className='list'>
        <InfiniteList />
        </div>
    </div>
  );
}

export default App;
