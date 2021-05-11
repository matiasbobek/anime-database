import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AnimesSearch  from './components/pages/AnimesSearch'
import AnimeMain  from './components/pages/AnimeMain'


function App() {
  return (
    <div className="container"> 
    <Router>
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation"> 
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <NavLink className="navbar-item" to="/">Home</NavLink>
          </div>
        </div>
      </nav>
      <Route path="/" exact>
        <AnimesSearch/>
      </Route>
      <Route path="/anime/:id">
        <AnimeMain />
      </Route>
    </Router>
    </div>
  );
}

export default App;