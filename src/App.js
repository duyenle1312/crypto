import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Buy from "./Buy";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path='/' component={Home} exact={true} />
              <Route path='/buy' component={Buy} exact={true} />
              <Route component={Home} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
