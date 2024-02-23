const mongoose = require("mongoose");
const service = require("../model/service");

const PORT = 8080;

// Replace this with your actual database connection string
const DB_URL = "mongodb+srv://pikachu:123@cluster0.qtcsw8r.mongodb.net/HMS";

mongoose_connection = async (app) => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("db connected success");

      app.listen(PORT, "0.0.0.0", () => {
        console.log(`listening at port ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = mongoose_connection;
