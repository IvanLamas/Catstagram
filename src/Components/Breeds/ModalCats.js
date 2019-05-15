//Dependencies
import React from 'react';
import { Modal, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { CookiesProvider } from 'react-cookie';

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

class ModalCats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <CookiesProvider>
                <div>
                    <img width={this.props.tWidth} height={this.props.tHeight}
                         src={this.props.url}
                         alt={this.props.name}
                         onClick={this.toggle}
                         className={this.props.className}
                    />
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
                        <img src={this.props.url} width={"100%"} alt={this.props.name}/>
                        <ModalFooter>
                            <Button color="danger" className={"btn-sm btn-block"}>
                                Agregar a mis favoritos &nbsp;
                                <FontAwesomeIcon icon={faHeart} color={"red"} size={"lg"}/>
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </CookiesProvider>
        );
    }
}

export default ModalCats;