import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{


  render(){
    console.log("ひつじ仙人")
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello React!</h1>
          <p>
            <code>src</code>を編集したら保存する。
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a>
        </header>
      </div>
    );
  }
}

export default App;
