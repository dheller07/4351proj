import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import reservation from './pages/Reservation';
import Login from './pages/Login';
import Form from './pages/Form';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/reservation" exact component={reservation} />
        <Route path="/login" exact component={Login} />
        <Route path="/form" exact component={Form} />"
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
