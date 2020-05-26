import React from "react";
import {Redirect, Link} from "react-router-dom"
import SearchForm from "./SearchForm";


class search extends React.Component {

   

    render() {
        return (
            <div className="search">Search/main page!

            <br/>

            <SearchForm searchPlant={this.props.searchPlant} />



             <br/>


            <Link to="/mygarden">My Garden</Link>

            </div>
           
        );
    }

}  

export default search;