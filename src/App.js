
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import ContactMe from "./components/Pages/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
          <NavBar/>
          <div className="pages">
              <Switch>
                  <Route exact path="/" >
                      <About />
                  </Route>
                  <Route exact path="/projects" >
                      <Projects />
                  </Route>
                  <Route exact path="/contactMe">
                      <ContactMe />
                  </Route>
              </Switch>
          </div>
          <Footer/>

      </Router>
    </>
  );
}

export default App;
