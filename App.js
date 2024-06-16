import React from 'react';
import './App.css';

class App extends Component {
  render() {
    //TopページのＵＲＬ
    const TopURL = "https://seikeiuniversityarcheryclub000.fc2.page/"
    //クラブ紹介のURL
    const ClubURL = ""
    //部員紹介のURL
    const MemberURL = ""
    //競技結果のURL
    const ResultURL =""
    //ライブラリのURL
    const LibraryURL =""
    //OB・OG会のURL
    const OBOGURL = ""
    //アーチェリークラブのロゴ
    const Archerylogo = ""
    //OutlineのURL
    const OutlineURL = ""
    //AccessのURL
    const AccessURL = ""
    //ExplainのURL
    const ExplainURL = ""

    return (
      <div className="App">
        <header className="App-header">
          <a href={TopURL} className="center header-left">
            <img class="logo" src={Archerylogo}>
          </a>
          <div className="center header-right">
            <ul class="center gnavi">
              <li class="current"><a href={TopURL}>TOP</a></li>
              <li><a href={ClubURL}>クラブ紹介</a></li>
  　          <li><a href={MemberURL}>部員紹介</a></li>
              <li><a href={ResultURL}>競技結果</a></li>
              <li><a href={LibraryURL}>ライブラリ</a></li>
              <li><a href={OBOGURL}>OB・OG会</a></li>
            </ul>
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
