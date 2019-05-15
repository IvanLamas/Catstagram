//Dependencies
import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

//Assets
import '../Breeds/Breeds.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Error 404</h1>
                    <p className="lead">¡Página no encontrada!</p>
                    <hr className="my-2" />
                    <p>La página a la que está intentando acceder no existe o se encuentra fuera de servicio.</p>
                    <p className="lead">
                        <Link to={"/"} className="btn btn-danger">
                            <FontAwesomeIcon icon={faArrowLeft}/>
                            &nbsp; Regresar a la página principal
                        </Link>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}