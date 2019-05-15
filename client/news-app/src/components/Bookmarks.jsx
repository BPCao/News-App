import React, { Component } from '../../node_modules/react';

class Bookmarks extends Component 
{
    render() 
    {
        let bookmarks = this.props.bookmarks 
        let bookmarkItems = bookmarks.map((bookmark, index) => <li key={index}>
                                                                    <h5>{bookmark.title}</h5>
                                                                    <h6>By {bookmark.author}</h6>
                                                                    <a href={bookmark.url}>Link</a>
                                                                    <p>{bookmark.description}</p>
                                                                    <button onClick={() => 
                                                                        this.props.onDeleteBookmark(bookmark)} 
                                                                        className="btn btn-warning btn-sm ml-2">
                                                                        Remove Bookmark</button>
                                                                </li>) 
        return (<div>
                <h4>Bookmarks</h4>
                <ul>{bookmarkItems}</ul>
                </div>);
    }
}
 
export default Bookmarks;
