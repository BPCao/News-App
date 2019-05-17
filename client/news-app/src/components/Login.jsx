import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

class Login extends Component 
{
    constructor()
    {
    super()
    this.state = {searchText: '',
                  username: '',
                  password: '',
                  newsList: [],
                  myBookmarks: []}
    } 
    
    handleTextChange = async (e) =>
    {
      await this.setState({[e.target.name]: e.target.value})
    }

    handleLogin = async (e) =>
    {
        axios.post('http://localhost:8080/login', {username: this.state.username,
                                                   password: this.state.password})
        .then(response => console.log(response))
        // .then(this.props.submitLoginInfo(response))
        .catch(function (error) {console.log(error);});                                               
    }

    render() 
    { 
        return (<div>
                <h4>Login</h4>
                <input type="text" placeholder="Username" className="mr-2" onChange={this.handleTextChange} name="username" />
                <input type="text" placeholder="Password" onChange={this.handleTextChange} name="password" />
                <button onClick={() => this.handleLogin()} className="btn btn-info btn-sm ml-2">Login</button>  
                <button onClick={() => this.props.onRegisterClick()} className="btn btn-info btn-sm ml-2">Register</button>  
                </div>)
    }
}

mapDispatchToProps = (dispatch) => 
{
    return {submitLoginInfo: () => dispatch({type: 'USER_LOGIN', value: true, id: ''})}
}

// export default Login
export default connect(null, mapDispatchToProps)(Login);