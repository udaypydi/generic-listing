import React, { Suspense } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
const App = React.lazy(() => import('src/app'));
const HotelDescription = React.lazy(() => import('components/hoteldescription'));
import Loader from 'uielements/loader/loader.component';

function LazyRoute({ component, route }) {
    return (
        <Suspense fallback={<Loader />}>
           <Route exact path={route} component={component} />
        </Suspense>
    );
}

function RoutesManager() {
    return (
        <Router>
            <Switch>
                <LazyRoute exact route="/" component={App} />
                <LazyRoute exact route="/hotel" component={HotelDescription} />
            </Switch>
        </Router>
      
    );
}

  export default RoutesManager;
  