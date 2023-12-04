import path from "path";
import fs from "fs";
import express from "express";

const app = express();

app.use(express.static("public"));

const html = fs.readFileSync(
  path.resolve(__dirname, "../src/client/index.html")
);

app.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "text/html").status(200).send(html);
});

app.listen(3030, () => console.log("App running on port 3030"));

export { app };
