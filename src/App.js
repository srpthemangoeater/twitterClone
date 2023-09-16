import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widget from './Components/Widgets';
import FeedHeader from './Components/FeedHeader';

function App() {
  return (
    <div className="overall-app">

      <div className="feedHeader">
        <FeedHeader/>
      </div>

      <div className="app">

          <div className="sidebar">
            <Sidebar />
          </div>
          
          <div className="feed">
            <Feed />
          </div>

          <div className="widget">
            <Widget />
          </div>

      </div>
    
    </div>
  );
}

export default App;
