import axios from "axios";

export default {
    login:function(email, password) {
        return axios.post("/api/users/login", {
            email,
            password
        })
    },
    
    register:function(username, email, password, image) {
        return axios.post("/api/user", {
            username,
            email,
            password,
            image
        });
    },

    getUsers:function(){
        return axios.get("/api/user");
    },

    getOneUser: function(id) {
        return axios.get("api/user/" + id)
    },
    getUserFromImage: function(id) {
        return axios.get(`/api/user/${id}`)
    },
}