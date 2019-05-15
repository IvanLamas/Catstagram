//Dependencies
import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

//Assets
import './Navigation.css';
import logo from './cat.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faHeart, faPaw } from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
                <Navbar color="light" light expand="lg" className={"fixed-top"}>
                    <div className={"container"}>
                        <NavbarBrand href="/">
                            <img src={logo} width="45px"  className="img-thumbnail" alt="Catstagram"/>
                            &nbsp;<span className={"fnt-dancing-script"}>Catstagram</span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}><FontAwesomeIcon icon={faSearch} size="lg" /></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <InputGroup size={"lg"}>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText className={"blanco"}>
                                        <FontAwesomeIcon icon={faPaw} size="lg" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                {this.props.inputElement}
                            </InputGroup>
                        </Collapse>
                        <Nav className="contents" navbar>
                            <NavItem>
                                <Link to="/list" className={"nav-link"}>
                                    <FontAwesomeIcon icon={faTh} size="lg" />
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/favourites" className={"nav-link"}>
                                    <FontAwesomeIcon icon={faHeart} size="lg" />
                                </Link>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
        );
    }
}

export default Navigation;