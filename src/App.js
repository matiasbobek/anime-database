import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {AnimeSearch} from './components/pages/AnimeSearch'
import {AnimeMain} from './components/pages/AnimeMain'


function App() {
  return (
    <>
    <NavLink to="/">Home</NavLink>
    <Router>
      <Route path="/" exact>
        <AnimeSearch/>
      </Route>
      <Route path="/anime/:id">
        <AnimeMain />
      </Route>
    </Router>
    <input value="Search an anime"></input>
    </>
  );
}

export default App;