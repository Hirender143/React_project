import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Routes() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Routes>
  );
}

export default Routes;