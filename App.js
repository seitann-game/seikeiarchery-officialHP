import React from 'react';
import './App.css';

class App extends Component {
  render() {
    //TopページのＵＲＬ
    const TopURL = "https://seikeiuniversityarcheryclub000.fc2.page/"
    //アーチェリークラブのロゴ
    const archerylogo = ""
    //OutlineのURLをつける
    const OutlineURL = ""
    //AccessのURLをつける
    const AccessURL = ""
    //ExplainのURLをつける
    const ExplainURL = ""

    return (
      <div className="App">
        <header className="App-header">
          <a href={TopURL} className="header-left">
            <img class="logo" src={archerylogo}>
          </a>
          <div className="header-right">
            <a href="#" className=""></a>
          </div>
        </header>

        <div className="contents">
          <a href={OutlineURL} className="btn outline">
            <h1>Outline</h1>
            <p>概要</p>
          </a>
          <a href={AccessURL} className="btn access">
            <h1>Access</h1>
            <p>アクセス</p>
          </a>
          <a href={ExplainURL} className="btn explain">
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
