const express = require("express");
const api = express.Router()
const feature= require("../databases/feature.json")
const project = require("../databases/project.json")

api.get("/feature", (req, res) => {
    res.status(200).json({
        message : "data feature",
        data: feature
    })
})

api.get("/project", (req, res) => {
    res.status(200).json({
        message : "data project",
        data: project
    })
})

module.exports = api;