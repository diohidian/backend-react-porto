const express = require("express");
const api = require("./routers/api");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(api);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});