import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AnimesSearch  from './components/pages/AnimesSearch'
import AnimeMain  from './components/pages/AnimeMain'


function App() {
  return (
    <>
    <Router>
      <div className="header">
        <NavLink to="/">Home</NavLink>
      </div>
      <Route path="/" exact>
        <AnimesSearch/>
      </Route>
      <Route path="/anime/:id">
        <AnimeMain />
      </Route>
    </Router>
    </>
  );
}

export default App;