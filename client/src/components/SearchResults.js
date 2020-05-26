import React from "react";
import {Redirect, Link} from "react-router-dom"


class SearchResults extends React.Component {

    componentDidMount(){
        console.log("hello world")
    }
   
    render() {
        return (
            <div className="SearchResults">Search results!
            
            
            
            <br/>
            
            <Link to="/mygarden">My Garden</Link>
            
            
            </div>
           


            
        );
    }

}

export default SearchResults;