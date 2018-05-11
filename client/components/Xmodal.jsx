import React, { Component } from 'react';
import Modal from '@bdenzer/react-modal';

const modalStyle = {
        animationTime: 400,
        modalHeader: {
          backgroundColor: 'green'
        },
        modalTitle: {
          color: 'white'
        },
        closeButtonText: {
          color: 'white'
        },
        hoveredButtonText: {
          fontWeight: 'bold'
        }
      };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowModal: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ shouldShowModal: false });
  }

  openModal() {
    this.setState({ shouldShowModal: true });
  }

  render() {
    return (
      <div>
        <Modal
          closeModal={this.closeModal}
          shouldShowModal={this.state.shouldShowModal}
          customStyle={modalStyle}
          title='Large Tablet'
        >
          This is some text inside the modal
        </Modal>
        <button onClick={this.openModal}>Open Modal</button>
      </div>
    );
  }
}
