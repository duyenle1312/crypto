import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Buy from "./Buy";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} exact={true} />
              <Route path='/buy' element={<Buy />} exact={true} />
              <Route element={<Home />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
