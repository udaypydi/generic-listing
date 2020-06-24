import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import App from 'src/app';
import Loader from 'uielements/loader/loader.component';

function LazyRoute({ component, route }) {
    return (
        <Suspense fallback={<Loader />}>
           <Route exact path={route} component={component} />
        </Suspense>
    )
}

function RoutesManager() {
    return (
        <Router>
            <Switch>
                <LazyRoute exact route="/" component={App} />
                <LazyRoute exact route="/hotels:id" component={App} />
            </Switch>
        </Router>
      
    )
}

  export default RoutesManager;
  