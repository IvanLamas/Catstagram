//Dependencies
import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, Row, Col } from 'reactstrap';
import Navigation from '../Navbar/Navigation';
import { Link } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

//Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class Favourites extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            name: cookies.get('name') || 'Ben',
            url: cookies.get('url') || '#'
        };
    }

    handleNameChange(name, url) {
        const { cookies } = this.props;

        cookies.set('name', name, { path: '/' });
        cookies.set('url', url, { path: '/' });
        this.setState({ name });
    }
    render(){
        const { name, url } = this.state;
        return(
            <div>
                <Navigation
                    inputElement={<Link to="/" className={"btn"}>
                        <FontAwesomeIcon icon={faArrowLeft} size={"lg"}/>
                        &nbsp;Regresar
                    </Link>} pawDisplay={"d-none"} />
                <br/><br/><br/>
                <div className="container">
                    <h1>Estos son tus favoritos</h1>
                    <hr/>
                    <Row className={"container"}>
                        <Col sm={"3"}>
                            <Card>
                                <CardImg top width="100%" src="https://www.cronica.com.ar/__export/1545082456284/sites/cronica/img/2018/12/17/untitled-design-16_crop1545082359973.png_1734428432.png" alt="Nombre de imagen" />
                                <CardBody>
                                    <CardTitle className={"lead"}>{ name }</CardTitle>
                                    <Link to={ url } className={"btn btn-light btn-block"} onChange={this.handleNameChange.bind(this)}>Ver gatito</Link>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default withCookies(Favourites);