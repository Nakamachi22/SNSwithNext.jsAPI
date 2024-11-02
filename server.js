const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/user");
require("dotenv").config();
const cors = require("cors");

const PORT = 3001;
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => console.log(`server is runnning on ${PORT}`));
