import { BrowserRouter, Switch, Route } from "react-router-dom";
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
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route path="/single">
            <SingleContainer />
          </Route>
          <Route path="/compare">
            <CompareContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
