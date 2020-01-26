const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = 5000;
mongoose.connect(
  process.env.ATLAS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to database")
);

const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
app.use(express.json());
app.use("/api/users", authRoute);
app.use("/api/posts", postsRoute);

app.listen(port, () => console.log(`Server listening on port ${port}`));
