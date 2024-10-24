import exp from "constants";
import express from express;
import connectDB from "./config/db";

connectDB();

const app = express();
app.use(express.json())

app.use('', )