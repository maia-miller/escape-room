import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux'

import {toggleLargeTablet} from '../actions/largetablet.js'

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

Modal.setAppElement('#app');

class LargeTablet extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
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

const mapStateToProps = (state) => {
  return {
    leaves: state.leaves,
    smalltabletfound: state.smalltabletfound,
    largetablet: state.largetablet
  }
}

export default connect(mapStateToProps)(LargeTablet)
