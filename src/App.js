import './App.css';
import Search from  "../src/components/Search/Search"
import Video from "../src/components/Video/Video"
import PageControls from "../src/components/PageControls/PageControls"

function App() {
  return (    
    <div className="App">
      <Search/>
      <Video/>
      <PageControls/>
    </div>    
  );
}

export default App;
