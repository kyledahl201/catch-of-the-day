import React from "react";
import {Redirect, Link} from "react-router-dom"


//my garden component will be updated with add plant
class search extends React.Component {

    render() {
        return (
            <div className="search">Search/main page!

            <br/>

            {/* <!-- Search form --> */}
            <form className="form-group mt-5 mb-5">
        <input className="form-control mb-5" required  placeholder="Plant Name" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Search
        </button>
      </form>
                <br/>
            <Link to="/mygarden">My Garden</Link>

            </div>
           
        );
    }

}  

export default search;