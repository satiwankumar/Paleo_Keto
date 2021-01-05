import React from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';

import Users from '../users/Users'
import Riders from '../riders/Riders'

import UserDetails from '../users/userDetails'



import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Viewprofile from '../users/Viewprofile';




// import Reports from '../report/Reports';
import reportDetails from '../report/reportDetails';
import Feedback from '../../components/Feedback/Feedback';
import category from '../../components/Category/Category';
// import Notifications from '../dashboard/Notifications'

const Routes = props => {
  return (
    <section >
   
      <Switch>
     
     
    

        <PrivateRoute exact path="/dashboard" component={Dashboard}/>

        <PrivateRoute exact path="/users" component={Users}/>
        <PrivateRoute exact path="/riders" component={Riders}/>
        
        <PrivateRoute exact path="/users/:id" component={UserDetails}/>
        
        <PrivateRoute exact path="/userdetail" component={UserDetails}/>
        <PrivateRoute exact path="/profile" component={Viewprofile}/>

        <PrivateRoute exact path="/feedback" component={Feedback}/>
        <PrivateRoute exact path="/report/:id" component={reportDetails}/>

        <PrivateRoute exact path="/product/categories" component={category}/>
  
        
       
        
        
      
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
