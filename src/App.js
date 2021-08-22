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
import Records from "./Pages/Records/Records";
import { HOME, GAME, HOWTOPLAY, RECORDS, ABOUT } from "./Utils/routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME} component={Home} exact />
        <Route path={GAME} component={CardBoard} />
        <Route path={HOWTOPLAY} component={HowToPlay} />
        <Route path={RECORDS} component={Records} />
        <Route path={ABOUT} component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
