import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import Resume from './components/Resume.js'
import Contact from './components/Contact.js'

export default function App() {
  return (
    <div className="bg-image">
      <div className="container">
        <Router>
        <Nav />
          <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}
