import React from 'react';
import './App.css';

class App extends Component {
  render() {
    //OutlineのURLをつける
    const OutlineURL = ""
    //AccessのURLをつける
    const AccessURL = ""
    //ExplainのURLをつける
    const ExplainURL = ""

    return (
      <div className="App">
        <header className="App-header">
        </header>

        <div className="contents">
          <a href="#" className="btn outline">
            <h1>Outline</h1>
            <p>概要</p>
          </a>
          <a href="#" className="btn access">
            <h1>Access</h1>
            <p>アクセス</p>
          </a>
          <a href="#" className="btn explain">
            <h1>Explain</h1>
            <p>弓具紹介</p>
          </a>
        </div>

        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
