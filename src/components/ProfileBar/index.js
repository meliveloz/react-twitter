import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './profilebar.css'

const propTypes = {
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onOpenText: PropTypes.func.isRequired
}

class ProfileBar extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="root4" >
            <Link to='/profile'>
                <figure>
                    <img className="avatar" src={this.props.picture} alt=""/>

                </figure>
                </Link>
                <span className="username" >Hola @{this.props.username} </span>
                <button className="button" onClick={this.props.onOpenText} >
                <span className="fa fa-lg fa-edit" ></span> Tweet!
                </button>
                <button onClick={this.props.onLogout} className= 'button'>
                    <span className='fab fa-sign-out'></span> Salir
                </button>
            </div>
        );
    }
}
ProfileBar.propTypes = propTypes
export default ProfileBar;