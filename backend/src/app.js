const express = require("express");
const cors = require("cors")
const router = require("./routers/loginRouter");
const app = express();

app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"]
}))
app.use(express.json());
app.use(router);

module.exports = app;