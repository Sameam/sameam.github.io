import './index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import Experince  from './components/Experince';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/experience" component={Experince}/>
      <Route path="/portfolio" component={Portfolio}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
