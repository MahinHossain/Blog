import Topbar from "./Topber/Topbar";
import Home from "./pages/home/Home";
import Single from "./Single/Single";
import SinglePost from "./SinglePost/SinglePost";
import WritePost from "./WritePost/WritePost";
function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Home /> */}
      <SinglePost />
      {/* <WritePost />  */}
    </div>
  );
}

export default App;
