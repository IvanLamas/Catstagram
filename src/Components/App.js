//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Assets
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//components
import Content from './Content';
import ListCats from './Breeds/ListCats';
import Footer from './Footer/Footer';

library.add(faSearch)

class App extends React.Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const { children } = this.props;
        return(
            <div>
                <ListCats />
                <Content body={children} />
                <Footer/>
            </div>
        )
    }
}

export default App;
