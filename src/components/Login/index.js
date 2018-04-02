import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './login.css'

const propTypes = {
    onAuth: PropTypes.func.isRequired
}

class Login extends Component {
 
   
    render() {
        return (
            <div className="root6" >
                <p className="text3" >Necesitamos que inicies sesión con tu cuenta de Github 
                para que puedas leer y escribir mensajes.
                </p>
                <button
                    onClick={this.props.OnAuth}
                    className='button3'
                >
               
                <span className="fab fa-github" ></span> Login con Github
                </button>
            </div>
        );
    }
}
Login.propTypes = propTypes

export default Login;
