import Topbar from "./Topber/Topbar";
import Home from "./pages/home/Home";
import Single from "./Single/Single";
import SinglePost from "./SinglePost/SinglePost";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
      <SinglePost />
    </div>
  );
}

export default App;
