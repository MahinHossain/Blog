import Topbar from "./components/Topber/Topbar";
import Home from "./components/home/Home";
import SinglePost from "./components/SinglePost/SinglePost";
import "react-toastify/dist/ReactToastify.css";
import WritePost from "./components/WritePost/WritePost";
import Loging from "./components/service/Loging";
import Registration from "./components/service/Registration";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/writepost">
            <WritePost />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Loging />
          </Route>
          <Route path="/singlepost">
            <SinglePost />
          </Route>
        </Switch>{" "}
      </Router>
    </div>
  );
}

export default App;
