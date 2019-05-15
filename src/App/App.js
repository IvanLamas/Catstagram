import React from 'react';
import './App.css';
import ListCats from '../Breeds/ListCats';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch)

class App extends React.Component {
    render() {
        return(
            <div>
                <ListCats/>
            </div>
        )
    }
}

export default App;
