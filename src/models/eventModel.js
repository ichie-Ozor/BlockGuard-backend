const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    eventName: {
        type: String,
        required: [true, "please add the event name"]
    },
    eventDescription: {
        type: String,
        required: [true, "please add the event description"]
    },
    eventType: {
        type: String,
        required: [true, "please add the event type"]
    },
    startDate: {
        type: Date,
        required: [true, "please add the start date"]
    },
    endDate: {
        type: Date,
        required: [true, "please add the end date"]
    },
    amount: {
        type: Number,
        required: [true, "please enter the amount"]
    },
    prizeFundSource: {
        type: String,
        required: [true, "please enter the price fund source"]
    }
}, { timestamps: true });

const EventModel = model("Event", eventSchema);

module.exports = EventModel