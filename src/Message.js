import React from 'react';
import PropTypes from 'prop-types'


class Message extends React.Component{

    render(){
        return(
            <div>
                {this.props.message.text}
            </div>
        );
    }
}

Message.propTypes={
    message: PropTypes.object.isRequired
}

export default Message