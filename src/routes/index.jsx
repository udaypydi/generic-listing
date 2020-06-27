import React, { Suspense } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import 'assets/css/main.css';
import App from 'src/app';
const HotelDescription = React.lazy(() => import('components/hoteldescription'));
import Loader from 'uielements/loader/loader.component';

function LazyRoute({ component: Component , route }) {
    return (
        <Route 
            exact 
            path={route} 
            render={props => (
                <Suspense fallback={<Loader />}>
                    <div className="bg-gray-100 w-full h-screen flex flex-1 items-center flex-col">
                        <Component {...props} />
                    </div>  
                </Suspense>
            )} 
        />
    );
}

function RoutesManager() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <LazyRoute route="/hotel/:id" component={HotelDescription} />
            </Switch>
        </Router>
      
    );
}

  export default RoutesManager;
  