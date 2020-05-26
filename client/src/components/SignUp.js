import React from "react";
import {Redirect, Link} from "react-router-dom"
import AddUserForm from "./AddUserForm"

//my garden component will be updated with add plant
class SignUp extends React.Component {

    

    render() {
        return (
            <div className="SignUp">Sign up page!
            
            
            <AddUserForm />
            {/* <Redirect to="/search" /> */}

            <br/>

            <Link to="/search">Main Page</Link>

            </div>
           
        );
    }

}  

export default SignUp;