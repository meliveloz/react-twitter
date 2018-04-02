import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Message from '../Message/index'
import './messagelist.css'

const propTypes = {
messages: PropTypes.arrayOf(PropTypes.Object).isRequired,
onRetweet: PropTypes.func.isRequired,
onFavorite: PropTypes.func.isRequired,
onReplyTweet: PropTypes.func.isRequired
}

class MessageList extends Component {
    constructor(props){
        super(props);
      
    }
    render() {
        return (
            <div className="root3" >
                {
                    this.props.messages.map(msg =>{
                   return (
                       <Message 
                       key = {msg.id}
                       text = {msg.text}
                        picture={msg.picture}
                        displayName= {msg.displayName}
                        userName={msg.userName}
                        date={msg.date}
                        numRetweets={msg.retweets}
                        numFavorites ={msg.favorites}
                        onRetweet= {()=>this.props.onRetweet(msg.id)}
                        onFavorite={()=>this.props.onFavorite(msg.id)}
                        onReplyTweet={()=>this.props.onReplyTweet(msg.id, msg.username)}
                       />
                   )
                    }).reverse()
                    }
            </div>
        );
    }
}
MessageList.propTypes = propTypes

export default MessageList;