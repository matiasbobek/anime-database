import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AnimesSearch  from './components/pages/AnimesSearch'
import AnimeMain  from './components/pages/AnimeMain'
import './App.css'

function App() {

  return (
    <div className="container" id="main-container"> 
    <Router>
      <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation"> 
        <div class="navbar-menu">
          <div class="navbar-start">
            <NavLink forceRefresh className="navbar-item" id="nav-link" to="/">Home</NavLink>
          </div>
        </div>
      </nav>
      <Route path="/" exact>
        <AnimesSearch />
      </Route>
      <Route path="/anime/:id">
        <AnimeMain />
      </Route>
    </Router>
    </div>
  );
}

export default App;
