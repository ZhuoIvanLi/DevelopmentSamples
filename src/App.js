import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import LowerApp from './LowerApp'
import {connect } from 'react-redux'
import {userSignupRequest} from './actions/signupActions'
import {addFlashMessage} from './actions/flashMessagesAction'
import MessageList from './MessageList'

class App extends Component {

  render() {
    const {userSignupRequest, addFlashMessage} = this.props;

    return (
      <div>
        <h1>Hello World!</h1>
        <MessageList />
        <LowerApp userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
     </div>
    );
  }
}

App.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

//pass the action to next level
export default connect((state)=> {return {}}, {userSignupRequest, addFlashMessage})(App);
