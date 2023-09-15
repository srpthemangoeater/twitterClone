import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widget from './Components/Widgets';

function App() {
  return (
    <div className="app">
      {/* <h1>twtter clone here</h1> */}

      <Sidebar/>
      <Feed/>
      <Sidebar/>

      

    </div>
  );
}

export default App;
