import React from "react";
import {Redirect, Link} from "react-router-dom"

//my garden component will be updated with add plant
class SignUp extends React.Component {

    

    render() {
        return (
            <div className="SignUp">Sign up page!
            
            
            {/* <Redirect to="/search" /> */}

            <br/>

            <Link to="/search">Main Page</Link>

            </div>
           
        );
    }

}  

export default SignUp;