import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './profile.css'

const propTypes = {
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

class Profile extends Component {
    render() {
        return (
            <div className="root5" >
                <img className="avatar2" src={this.props.picture} alt=""/>
                <span className="name2" > { this.props.displayName } </span>
                <ul className="data2" >
                <li>
                    <span className="fa fa-user" ></span> {this.props.userName}
                </li>
                <li>
                    <span className="fa fa-envelope" ></span> { this.props.emailAddress }
                </li>
                <li>
                    <span className="fa fa-map-marker" ></span> {this.props.location}
                </li>

                </ul>
            </div>
        );
    }
}
Profile.propTypes = propTypes

export default Profile;