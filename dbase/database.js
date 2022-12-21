//My mongoose database connection using mongoDB atlas
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database with success"))
  .catch((err) => console.log("failled to connected to database", err));
