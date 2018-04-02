import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import moment from 'moment'

import './message.css'

const propTypes = {
    onFavorite: PropTypes.func.isRequired,
    onRetweet: PropTypes.func.isRequired,
    date: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    onReplyTweet: PropTypes.func.isRequired,
    numRetweets: PropTypes.number.isRequired,
    numFavorites: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

class Message extends Component {
    constructor(props){
        super(props);
        this.state= {
            pressFavorite: false,
            pressRetweet: false
        }

        this.onPressRetweet = this.onPressRetweet.bind(this)
        this.onPressFavorite = this.onPressFavorite.bind(this)
        
    }
    onPressFavorite(){
        this.props.onFavorite()
        this.setState({
           pressFavorite: true
        
        })

    }

    onPressRetweet(){
        this.props.onRetweet()
        this.setState({
            pressRetweet:true
        })

    }
    render() {
        let dateFormat = moment(this.props.date).fromNow();
        let userLink = `/user/${this.props.userName} `
        return (
            <div className="root2">
                <div className="user" >
                <Link to={userLink} >
                <figure>
                    <img className="avatar" src= {this.props.picture} />
                </figure>
                </Link>
                <span className="displayName" >{this.props.displayName} </span>
                    <span className="username">{this.props.userName}</span>
                <span className= "date"> {dateFormat} </span>
                </div>
                <h3 className="text" >{this.props.text} </h3>
                <div className="buttons" >
                    <div 
                    className="icon"
                    onClick={this.props.onReplyTweet}
                     >

                    <span className="fa fa-reply" ></span>
                    
                     </div>
                    <div 
                    className= {(this.state.pressRetweet) ? 'green' : ''}
                    onClick = {this.onPressRetweet}
                    >
                        <span className="fa fa-retweet" ></span>
                        <span className="num">{this.props.numRetweets} </span>
                    </div>
                    <div 
                    className= {(this.state.pressFavorite) ? 'yellow' : ''}
                    onClick= {this.onPressFavorite} >
                        <span className="fa fa-star" ></span>
                        <span className="num">{this.props.numFavorites} </span>
                    </div>
                </div>
            </div>
        );
    }
}
Message.propTypes = propTypes
export default Message;