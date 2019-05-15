//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from './Components/App';
import ListCats from './Components/Breeds/ListCats';
import Favourites from './Components/Favourites/Favourites';
import NotFound from './Components/Errors/NotFound';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/" component={"ListCats"} />
            <Route path="/favourites" component={"Favourites"} />
            <Route component="NotFound" />
        </Switch>
    </App>;

export default AppRoutes;