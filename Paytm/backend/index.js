const express = require("express")
const cors = require("cors")

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index")

const app = express()


app.use("api/v1", mainRouter);   // makes sure that all the requests that are coming here go to the mainrouter

app.listen(3000)
