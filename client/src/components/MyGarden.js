import React from "react";
import axios from "axios";
require('dotenv').config();

//my garden component will be updated with add plant
class MyGarden extends React.Component {
    // //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~WIKIMEDIA EXAMPLE SEARCH
    // wikiSearch() {
    //     var url = "https://en.wikipedia.org/w/api.php";

    //     var params = {
    //         action: "query",
    //         list: "search",
    //         srsearch: "Nelson Mandela",
    //         format: "json"
    //     };

    //     url = url + "?origin=*";
    //     Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    //     fetch(url)
    //         .then(function (response) { return response.json(); })
    //         .then(function (response) {
    //             if (response.query.search[0].title === "Nelson Mandela") {
    //                 console.log("Your search page 'Nelson Mandela' exists on English Wikipedia");
    //             }
    //         })
    //         .catch(function (error) { console.log(error); });
    // }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~UNSPLASH SEARCH
    // unsplashSearch() {

    // }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TREFLE SEARCH
    componentDidMount() {
        var userQuery = ({search}).val().trim();
        var trefleUrl = 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants?q=' + userQuery + '&token=' + process.env.REACT_APP_TREFLE_KEY;
        axios.get(trefleUrl)
          .then(res => {
            const plants = res.data;
            this.setState({ plants });
          })
      }

    render() {
        return (<div>
            <div className="MyGarden">My Garden page!</div>
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">Your Plant Search</h5>
            </div>
          </div>
          </div>
        );
    }

}

export default MyGarden;