import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class LowerApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            address: "",
            errors: {}
        }
    };

  onClick = (e) => {
    this.props.userSignupRequest(this.state)

    this.props.addFlashMessage({
        type:'success',
        text: 'success execute the flash action'
    })
  }

  render() {
    return (
      <div>
        <button onClick={(e)=>this.onClick(e)}>get user</button>
     </div>
    );
  }
}

LowerApp.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default LowerApp;