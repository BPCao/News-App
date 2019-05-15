import React, { Component } from 'react';

class Login extends Component 
{
    render() 
    { 
        return (<div>
                <h4>Login</h4>
                <input type="text" placeholder="Username" className="mr-2" onChange={this.props.onTextChange} name="username" />
                <input type="text" placeholder="Password" onChange={this.props.onTextChange} name="password" />
                <button onClick={() => this.props.onLoginClick()} className="btn btn-info btn-sm ml-2">Login</button>  
                <button onClick={() => this.props.onRegisterClick()} className="btn btn-info btn-sm ml-2">Register</button>  
                </div>)
    }
}
 
export default Login;