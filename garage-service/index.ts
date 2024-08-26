import express from "express";
const PORT = 3000;
const addService = require("./src/routes/addservice.route");

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use("/api/addservice", addService);

module.exports = app;
