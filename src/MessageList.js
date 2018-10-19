import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Message from './Message'

class MessageList extends React.Component{
    render(){
        const messages = this.props.messages.map(message=>
            <Message key={message.id} message={message} />
        );

        return(
            <div>
                {messages}
            </div>
        );
    }
}

MessageList.propTypes={
    messages: PropTypes.array.isRequired
}

const mapStateToProps= (state) =>{
    return{
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps)(MessageList)