import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import history from '../history';

const App = () => {
   return(
      <Router history={history} >
      <div>
         <Header />
         <Switch>
         <Route path="/"></Route>
         </Switch>
      </div>
      </Router>
   );
};

export default App;