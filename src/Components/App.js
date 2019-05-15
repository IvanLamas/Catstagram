//Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Assets
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//components
import ListCats from './Breeds/ListCats';
import Footer from './Footer/Footer';
import Favourites from "./Favourites/Favourites";
import NotFound from "./Errors/NotFound";

library.add(faSearch)

class App extends React.Component {
    render() {
        return(
            <div className="app">
                <Router>
                    <Switch>
                        <Route path="/" component={ListCats} exact />
                        <Route path="/list" component={ListCats} exact />
                        <Route path="/favourites" component={Favourites} exact />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;
