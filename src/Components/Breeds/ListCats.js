//Dependencies
import React from 'react';
import {Card, Row, Col, Input} from 'reactstrap';

//Assets
import './Breeds.css';

//Components
import ModalCats from './ModalCats';
import Navigation from '../Navbar/Navigation';
import Loading from '../Content/Loading';

/*Constants and variables*/
let limit = 68;
let pagination = 10;
let order = 'DESC';
const API_KEY = '98ea100f-e79e-44f7-b0d5-caae320b8753';
const API_BREEDS = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${pagination}&order=${order}&api_key=${API_KEY}`;

class ListCats  extends React.Component {
    constructor() {
        super()
        this.state = {
            breeds: [],
            isLoading: true,
            error: null,
            searchString: '',
            filteredBreeds: [],
            isHovered: false,
        }
        // react is very declaritive...
        this.updateSearchString = this.updateSearchString.bind(this)

    }
    // async function to fetch all breeds
    async fetchBreeds() {
        try {
            let response = await fetch(API_BREEDS)
            response = await response.json()
            this.setState({
                ...this.state,
                breeds: response,
                filteredBreeds: response,
                isLoading: false
            })
        } catch (error) {
            console.log(error)
            this.setState({
                ...this.state,
                error,
                isLoading: false
            })
        }
    }
    // update our state on input in /breeds
    updateSearchString(event) {
        this.setState({
            ...this.state,
            searchString: event.target.value,
            filteredBreeds: (event.target.value !== '')
                // breeds which only contain the search string (lowercase comparison for case-insensitive search)
                ? this.state.breeds.filter(breed => {
                    //var catO = breed.breeds.length > 0 ? breed.breeds[0].name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 : breed;
                    //return catO;
                    return breed.breeds[0].name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
                    //console.log(breed);
                    //return breed
                })
                : this.state.breeds
        })
    }
    // componentDidMount wasn't fetching before rendering
    // componentWillMount async fixed this
    async componentWillMount() {
        await this.fetchBreeds()
    }
    render() {
        const { isLoading, filteredBreeds, error } = this.state;
        return(
            <div>
                {(error ? <p>{error}</p> : null)}
                <Navigation
                    inputElement={<Input type="text" placeholder="Buscar por raza..." value={this.state.searchString} onChange={this.updateSearchString} />}
                    pawDisplay={""}
                />
                <br/><br/><br/>
                <div className={"container"}>
                    <h5>Aquí tienes {filteredBreeds.length} resultados de gatitos.</h5>
                    <hr/>
                    <Row>
                        {
                            isLoading
                                ? (<Loading />)
                                : (filteredBreeds.map(feline => {
                                    const { breeds, url } = feline;
                                    return (
                                        <Col sm={"3"} key={url}>
                                            <Card>
                                                <ModalCats tWidth="100%" tHeight={"230px"}
                                                           name={breeds[0].name}
                                                           url={url}
                                                           className={"rounded mx-auto d-block tImage"}
                                                />
                                            </Card>
                                        </Col>
                                    )
                                }))
                        }
                    </Row>
                </div>
            </div>
        )
    }
}

export default ListCats;