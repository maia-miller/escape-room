import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow              : 'scroll',
    height                : '70%',
    background            : 'beige',
    border                : '2px solid black'
  }
};

Modal.setAppElement('#app');

class ComponentName extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.dispatch(toggleLargeTablet())
  }

  render() {
    return (
      <div className='modal'>
        <Modal
          isOpen={this.props.largetablet}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Large Tablet"
        >
          <img className='modal-img' src='../../images/largetablet.png'/>

        </Modal>
      </div>
    );
  }
}
