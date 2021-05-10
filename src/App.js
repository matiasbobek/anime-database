import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AnimeSearch  from './components/pages/AnimeSearch'
import AnimeMain  from './components/pages/AnimeMain'


function App() {
  return (
    <>
    <Router>
      <div className="header">
        <NavLink to="/">Home</NavLink>
      </div>
      <Route path="/" exact>
        <AnimeSearch/>
      </Route>
      <Route path="/anime/:id">
        <AnimeMain />
      </Route>
    </Router>
    </>
  );
}

export default App;