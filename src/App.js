import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AnimesSearch  from './components/pages/AnimesSearch'
import AnimeMain  from './components/pages/AnimeMain'
import './App.css'

function App() {

  return (
    <div className="container" id="main-container"> 
    <Router forceRefresh>
      <div id="navbar"> 
            <NavLink  className="navbar-item" id="nav-link" to="/">Home</NavLink>
      </div>
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
