import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import history from '../history';
import Home from '../pages/Home';

const App = () => {
   return(
      <Router history={history} >
      <div>
         <Header />
         <Route exact path="/" component={Home}></Route>
      </div>
      </Router>
   );
};

export default App;