import About from "./About";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
import Tab from "./Tab";
import YoutubeEmbed from "./YouTube";
import Form from "./Form";
import Cards from "./CardInfo";
import Pdf from "./Pdf";

function App() {
  return (
    <div className="App">
       <Home />
       <Pdf />
       <YoutubeEmbed embedId="yegQsjY-Hso" />
       <Cards />
       <Tab />
       <About />
       <Service />
       <Project />
       {/* <Blog /> */}
       {/* <Contact /> */}
       <Form />
       <Footer />
    </div>
  );
}

export default App;
