const db = require("../models");
const md5 = require("md5");
const getSession = (account) => {
    return {
        id: account._id,
        name: account.name,
        image: account.image,
        token: md5(account.email + account.date)
    }
}

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel.map((user) => {
        return {image: user.image, id: user._id}
      })))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Creating user!");
      let account = req.body;
      account.email = req.body.email.toLowerCase();
      account.password = md5(req.body.password);
    db.Users
      .create(account)
      .then(dbModel => {
        console.log(getSession(dbModel));
        res.json(getSessions(dbModel))
      })
      .catch(err => {
        console.log(err)
         res.status(422).json(err)
    });
  },
  update: function(req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  lastUpdatedDate: function(req, res) {
    this.lastUpdated = Date.now();
  
    return this.lastUpdated;


  getUserFromImage: function(req,res) {
    console.log("get user from image test", req.body)
    db.User
      .find({image:req.body})
      .then(dbModel => {
        console.log("GIVE ME THE ID!" + dbModel)
        res.json(getSession(dbModel))
      })
      .catch(err => res.status(422).json(err));

  }
  // lastUpdatedDate = function(req, res) {
  //   this.lastUpdated = Date.now();
  
  //   return this.lastUpdated;
  // }
};