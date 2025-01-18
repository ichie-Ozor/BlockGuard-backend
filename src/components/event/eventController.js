const eventService = require('./eventService.js')


const {
    createEventService
} = eventService

const createEvent = async (req, res, next) => {
    console.log(req.body, "create event")
    try {
        const { eventName, eventDescription, eventType, startDate, endDate, amount, prizeFundSource } = req.body
        if (!eventName || !eventDescription || !eventType || !startDate || !endDate || !amount || !prizeFundSource) {
            res.status(400).json({
                success: false,
                message: "Unable to create event, please complete the event form"
            })
        }

        await createEventService(req.body)
        res.status(200).json({
            success: true,
            message: "You have successfully created an event"
        })
    } catch {
        res.status(500).json({
            success: false,
            message: "Something went wrong, try again later"
        })
    }
}

module.exports = {
    createEvent
}