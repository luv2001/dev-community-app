import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const PORT = 5500 || process.env.PORT;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("HEMLO LEMLO MEMRA");
});

const DATABASE_URL =
  "mongodb+srv://dbdevapp:dbdevapp@cluster0.dhsuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log(` ${error.message} Could not connect`);
  });
