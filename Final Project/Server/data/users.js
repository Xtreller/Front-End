const usersById = {}
const usersByEmail = {}
const userModel = require('../models/user');

module.exports = {
  total: () => Object.keys(usersById).length,
  save: (user) => {

    userModel.create(user)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  },
  all:()=>{
    userModel.find({})
    .then(res=>res.json())
    .catch(console.log)
  },
  findByEmail: (email) => {
    //toDo
  },
  findById: (id) => {
    //toDo
  }
}
