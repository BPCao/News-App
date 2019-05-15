import React, {Component} from '../../node_modules/react';

class Search extends Component 
{
    render() 
    { 
        return (<div>
                <h4>News Search</h4>
                <input type="text" placeholder="Search" onChange={this.props.onTextChange} name="searchText" />
                <button onClick={() => this.props.onSearchClick()} className="btn btn-info btn-sm ml-2">Search</button>
                <ul className="mt-5" >
                    {this.props.postItems}
                </ul>
                </div>);
    }
}
 
export default Search;