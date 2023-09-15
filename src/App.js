import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widget from './Components/Widgets';

function App() {
  return (
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
  );
}

export default App;
