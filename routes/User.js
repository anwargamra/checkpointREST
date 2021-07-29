const express = require("express");
const router = express.Router()
const User = require("../models/User")

//http:localhost:8500/
// Add new User

router.post("/", (req, res) => {
    const newUser = new User({ ...req.body })
    newUser.save()
        .then(user => res.status(200).json(user))
        .catch(err => console.log(err))
})

// http:localhost:8500/
// Get all users

router.get("/", (req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.send(err))
})

// http:localhost:8500/

router.get("/:_id", (req, res) => {
    // let id=req.params.id
    let { _id } = req.params
    User.find({ _id })
        .then(user => res.send(user))
        .catch(err => res.send(err))
})

//Delete user by id

router.delete("/:_id", (req, res) => {
    let { _id } = req.params
    User.findByIdAndDelete({ _id })
        .then(() => res.send("User has been deleted"))
        .catch(err => res.send(err))
})

// http:localhost:8500/
// Update user by id

router.put("/:_id", (req, res) => {
    let { _id } = req.params
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(() => res.send("User has been updated"))
        .catch(err => res.send(err))
})

module.exports = router;