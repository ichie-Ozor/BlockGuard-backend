const express = require("express");
const eventController = require("./eventController.js")

const { createEvent } = eventController

const eventRouter = express.Router()

eventRouter.route("/").post(createEvent)

module.exports = eventRouter;