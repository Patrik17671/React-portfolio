
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
                  <Route exact path="/" component={About}/>
                  <Route  path="/projects" component={Projects}/>
                  <Route  path="/contactMe" component={ContactMe}/>
              </Switch>
          </div>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
