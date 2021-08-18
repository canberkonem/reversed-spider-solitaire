import "./App.css";
import CardBoard from "./Pages/CardBoard/CardBoard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HowToPlay from "./Pages/HowToPlay/HowToPlay";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game" component={CardBoard} />
        <Route path="/how-to-play" component={HowToPlay} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
