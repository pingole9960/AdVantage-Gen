const express = require("express");
const cors = require("cors");
require("dotenv").config();

const adRoutes = require("./routes/adRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ad", adRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));