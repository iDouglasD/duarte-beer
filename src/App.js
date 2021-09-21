import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
