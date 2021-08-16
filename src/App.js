import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Navbar from "./components/navbar/Navbar";
import CompareContainer from "./pages/Compare/CompareContainer";
import HomeContainer from "./pages/Home/HomeContainer";
import SingleContainer from "./pages/Single/SingleContainer";

const routes = [
  { path: "/users", name: "Users", Component: HomeContainer, exact: false },
  { path: "/user", name: "Single User", Component: SingleContainer, exact: false },
  {
    path: "/confirmation",
    name: "Confirmation",
    Component: CompareContainer,
    exact: false,
  },
  
];

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/'>
          <Redirect to='/users'/>
        </Route>

        {routes.map(({ path, Component, exact }) => (
          <Route key={path} exact={exact} path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </BrowserRouter>
    </div>
  );
}

export default App;
