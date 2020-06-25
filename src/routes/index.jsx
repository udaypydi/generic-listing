import React, { Suspense } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
const App = React.lazy(() => import('src/app'));
const HotelDescription = React.lazy(() => import('components/hoteldescription'));
import Loader from 'uielements/loader/loader.component';

function LazyRoute({ component: Component , route }) {
    return (
        <Route 
            exact 
            path={route} 
            render={props => (
                <Suspense fallback={<Loader />}>
                    <Component {...props} />
                </Suspense>
            )} 
        />
    );
}

function RoutesManager() {
    return (
        <Router>
            <Switch>
                <LazyRoute route="/" component={App} />
                <LazyRoute route="/hotel" component={HotelDescription} />
            </Switch>
        </Router>
      
    );
}

  export default RoutesManager;
  