import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CompareContainer from "./pages/Compare/CompareContainer";
import HomeContainer from "./pages/Home/HomeContainer";
import SingleContainer from "./pages/Single/SingleContainer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/users" />}
          />
          <Route exact path="/users">
            <HomeContainer />
          </Route>
          <Route path="/user">
            <SingleContainer />
          </Route>
          <Route path="/confirmation">
            <CompareContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
