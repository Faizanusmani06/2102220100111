import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import getProducts from "./routes/getProducts";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // server will accept request from this url
    credentials: true,
  })
);

app.use("/api/getProducts", getProducts)


app.listen(7000, () => {
    console.log("Server is running on localhost:7000")
})