const usersById = {}
const usersByEmail = {}
const userModel = require('../models/user');

module.exports = {
  total: () => Object.keys(usersById).length,
  save: (user) => {

    userModel.create(user)
      .then(res => res)
      .catch(err => console.log(err))

  },
  getAll: () => {
    const users = userModel.find({})
      .then(res => { return res })
    return users

  },
  findByEmail: (email) => {
    //toDo
  },
  findById: (id) => {
    //toDo
  }
}
