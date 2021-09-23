import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/cervejas" exact component={Beers}></Route>
                    <Route path="/sobre" exact component={About}></Route>"
                    <Route path="/contato" exact component={Contact}></Route>"
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
