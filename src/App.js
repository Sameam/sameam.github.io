import './index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Experince  from './components/Experince';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/experience" component={Experince}/>
      <Route path="/portfolio" component={Portfolio}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
