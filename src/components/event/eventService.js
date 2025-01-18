const EventModel = require("../../models/eventModel");
const { Types } = require("mongoose");

const createEventService = async (data) => {
    const newEvent = await EventModel.create(data)
    return newEvent
}

module.exports = {
    createEventService
}