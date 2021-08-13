import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// components
import Navbar from './components/Navbar'
// pages
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import SingleCocktail from './pages/SingleCocktail'

function App() {
  return (
    <div className="App">
    < Router>
    <Navbar/>
    <Switch>
      <Route exact path = '/'>
       <Home/>
      </Route>
      <Route path = '/about'>
       <About/>
      </Route>
      <Route path  = '/cocktail/:id'>
       <SingleCocktail/>
      </Route>
      <Route path  = '*'>
       <Error/>
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
