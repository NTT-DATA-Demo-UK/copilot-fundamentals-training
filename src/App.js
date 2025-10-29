import './App.css';
import React from 'react'
import GitHubHeader from './components/GitHubHeader'
import RepositoryForker from './components/RepositoryForker'

function App() {
  return (
    <div className="App">
      <GitHubHeader title="Repository Forker" avatar="jefeish"/>
      <div className="MainContent">
        <RepositoryForker />
      </div>
    </div>
  );
}

export default App;
