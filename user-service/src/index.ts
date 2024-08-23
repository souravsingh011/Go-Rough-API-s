import express, { Express, Request, Response } from "express";
import UserSignUpRoute from "./routes/userSignUp.route";

const app: Express = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
app.use("/api/user/", UserSignUpRoute);

module.exports = app;
