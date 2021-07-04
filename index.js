require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const keys = require("./config/keys");

app.use(express.json());

const uri = keys.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

require("./routes/transactionRoutes")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
