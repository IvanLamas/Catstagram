import React from 'react';
import Loading from '../App/Loading';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {faEye, faHeart, faHeartBroken, faPaw, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {Card, Row, Col, Input} from 'reactstrap';
import ModalCats from './ModalCats';
import Navbar from '../Navbar/Navigation';

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
                <Navbar inputElement={<Input type="text" placeholder="Buscar por raza..." value={this.state.searchString} onChange={this.updateSearchString} />} />
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
                                    //while (breeds[0] !== null || breeds[0] !== undefined){
                                    return (
                                        <Col sm={"3"}>
                                            <Card>
                                                <ModalCats tWidth="100%" tHeight={"230px"}
                                                           /*name={breeds[0] !== null || breeds[0] !== undefined ? breeds[0].name : "Sin categoria"}*/
                                                           name={breeds[0].name}
                                                           url={url}
                                                           className={"rounded mx-auto d-block tImage"}
                                                />
                                            </Card>
                                        </Col>
                                    )//}
                                }))
                        }
                    </Row>
                </div>
            </div>
        )
    }
}

export default ListCats;