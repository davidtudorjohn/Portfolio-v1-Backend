const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());

dotenv.config();
const port = process.env.PORT;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "auth-token");
  next();
});

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
