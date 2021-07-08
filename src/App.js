import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import './styles/styles.scss'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Blogs from './pages/Blogs'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/blogs' component={Blogs} />
            <Route component={NotFound} />
          </Switch>
      </Router>
      {/* <Footer/> */}
    </>
  );
}

export default App;
