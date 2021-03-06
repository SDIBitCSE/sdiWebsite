import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import './styles/styles.scss'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
// import Blogs from './pages/Blogs'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './components/Signup'
import LP from './components/LandingPage'
import { AuthProvider } from './context/context';

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            {/* <Route exact path='/blogs' component={Blogs} /> */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/landingPage' component={LP} />
            <Route component={NotFound} />
          </Switch>
      </Router>
      </AuthProvider>
      {/* <Footer/> */}
    </>
  );
}

export default App;
