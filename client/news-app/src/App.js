import React, { Component } from '../node_modules/react';
import './App.css';
import Navbar from './components/Navbar';
import {Switch, Route} from '../node_modules/react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Bookmarks from './components/Bookmarks';
import * as constant from './utils/constants'
import axios from '../node_modules/axios'

class App extends Component 
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

  componentDidMount() 
  {
    axios.get('http://localhost:8080/bookmarks')
    .then(response => this.setState({myBookmarks: response.data}))
    .catch(error => console.log(error))
  }

  handleTextChange = async (e) =>
  {
      await this.setState({[e.target.name]: e.target.value})
  }
  
  handleRegister = async (e) =>
  {
    axios.post('http://localhost:8080/register', {username: this.state.username,
                                                  password: this.state.password})
    .then(response => console.log(response))
    .catch(function (error) {console.log(error);});
  }

  handleLogin = async (e) =>
  {
    axios.post('http://localhost:8080/login', {username: this.state.username,
                                               password: this.state.password})
    .then(response => console.log(response))
    .catch(function (error) {console.log(error);});                                               
  }

  handleSearchClick = async () =>
  {
    let newSearch = `https://newsapi.org/v2/everything?q=${this.state.searchText}&sortBy=popularity&apiKey=${constant.apiKey}`;
      const data = await axios.get(newSearch)
      await this.setState({newsList:data})
      let postItems = this.state.newsList.data.articles.map((post, index) =>
                                                            {return <li key={index}>
                                                                      <h5>{post.title}</h5>
                                                                      <h6>By {post.author}</h6>
                                                                      <a href={post.url}>Link</a>
                                                                      <p>{post.description}</p>
                                                                      <button onClick={() => 
                                                                        this.handleBookmark(post)} 
                                                                        className="btn btn-info btn-sm ml-2">
                                                                        Add to Bookmarks</button>
                                                                    </li>})    
    this.setState({postItems: postItems})                                                                  
  }  

  handleBookmark = async (post) =>
  {
    await this.setState({myBookmarks: this.state.myBookmarks.concat(post)})
    axios.post('http://localhost:8080/bookmarks', {author: post.author,
                                                title: post.title,
                                                source: post.source.name,
                                                published: post.publishedAt})
    .then(response => console.log(response))
    .catch(function (error) {console.log(error);});
  }

  handleDeleteBookmark = async (bookmark) =>
  {
    console.log(bookmark);
    let newArray = [...this.state.myBookmarks]
    let index = newArray.indexOf(bookmark)
    newArray.splice(index, 1)
    await this.setState({myBookmarks: newArray})
    axios.post('http://localhost:8080/delete-bookmark', {author: bookmark.author,
                                                        title: bookmark.title,
                                                        source: bookmark.source,
                                                        published: bookmark.published})
    .then(response => console.log(response))
    .catch(function (error) {console.log(error);});
  }

  render()
  {
    return (<div className="App">
            <Navbar />
            <Switch>
              <Route path="/login" render={(props) => 
              <Login onTextChange={this.handleTextChange} 
              onRegisterClick={this.handleRegister}
              onLoginClick={this.handleLogin} {...props} />} />
              <Route path="/search" render={(props) => 
              <Search onTextChange={this.handleTextChange} 
              onSearchClick={this.handleSearchClick}
              onBookmark={this.handleBookmark} 
              postItems={this.state.postItems} {...props} />} />
              <Route path="/bookmarks" render={(props) => 
              <Bookmarks bookmarks={this.state.myBookmarks}
              onDeleteBookmark={this.handleDeleteBookmark}
               {...props} />} />
              <Route path="/" exact component={Search}/>
            </Switch>
            <h5>Powered by NewsAPI</h5>
            </div>)
  }        
}
export default App;
