import React from "react";
import {Redirect, Link} from "react-router-dom"


//my garden component will be updated with add plant
class search extends React.Component {

    render() {
        return (
            <div className="search">Search/main page!

                <br/>
            <Link to="/mygarden">My Garden</Link>

            </div>
           
        );
    }

}  

export default search;