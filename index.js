require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const keys = require("./config/keys");
const cors = require("cors");

mongoose
  .connect(keys.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

require("./routes/transactionRoutes")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
