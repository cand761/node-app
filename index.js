import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./route/employeeRoute.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGOURI = process.env.MONGO_URL;

mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("Database Connected Successfully");

    // ✅ Make sure this line is BEFORE app.listen
    app.use("/api/employees", route);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
