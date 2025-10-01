import express from "express";
import { resepi } from "./db";

const app = express();
const port = 8080;

app.get("/", (_, res) => {
  res.send("welcome to resepika.com api");
});

app.get("/resepi", (_, res) => {
  res.send(resepi);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
