import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import history from '../history';
import Home from '../pages/Home';

class App extends React.Component {
   constructor() {
      super()
   }

   render() {
      return(
         <Router history={history} >
         <div>
            <Header />
            <Route exact path="/" component={Home}></Route>
         </div>
         </Router>
      );
   }
   
};

export default App;