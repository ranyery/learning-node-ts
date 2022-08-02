import express from "express";
import * as bookController from "./controllers/book.controller";

const app = express();
app.use(express.json());

app.get("/", bookController.getAll);
app.get("/:id", bookController.getById);
app.post("/", bookController.create);

app.listen(3000, () => {
  console.log("🚀 app listening on port 3000 => http://localhost:3000");
});
