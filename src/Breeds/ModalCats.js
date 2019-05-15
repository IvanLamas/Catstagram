import React from 'react';
import { Modal, ModalHeader } from 'reactstrap';

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
                </Modal>
            </div>
        );
    }
}

export default ModalCats;