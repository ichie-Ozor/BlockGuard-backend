const Express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const eventRouter = require("./components/event/eventRouter.js");
const accountRoute = require('./components/account/accountRouter.js')


dotenv.config();

const corsOptions = {
    origin: ["http://localhost:3002", "https://blockguard-76fb4c03cbe0.herokuapp.com"],
    credentials: true,
    optionSuccessstatus: 200
}

const app = Express();
const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URI;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors(corsOptions))


app.use("/event", eventRouter)
app.use("/signup", accountRoute)

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Blockguard"
    });
});

app.listen(PORT, async () => {
    try {
        await connectDB(MONGODB_URL);
        console.log(`Server is running on port ${PORT}`)
    } catch (error) {
        console.log(error.message);
    }
})