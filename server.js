const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const questions_routes = require("./routes/questions_route.js");

app.use(cors());
app.use("/", questions_routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});