import express from "express";
import { addServiceValidator } from "./addservice.validator";

const PORT = 3000;
const addService = require("./src/routes/addservice.route");
const addSpecialOffer = require("./src/routes/addspecialoffer.route");
const customService = require("./src/routes/customservice.route");
const garageInformation = require("./src/routes/garageinformation.route");
const home = require("./src/routes/home.route");
const mechanicDetails = require("./src/routes/mechanicdetails.route");
const loggedInDevice = require("./src/routes/mechanicloggedindevices.route");
const mechanicSignUpRoute = require("./src/routes/mechanicsignup.route");
const paymentRoute = require("./src/routes/paymentmethod.route");
const selectService = require("./src/routes/selectservice.route");
const serviceService = require("./src/routes/service.route");
const serviceIncludes = require("./src/routes/serviceincludes.route");
const serviceType = require("./src/routes/servicetype.route");
const trackOrder = require("./src/routes/trackorder.route");

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use("/api/addservice", addServiceValidator, addService);
app.use("/api/addspecialoffer", addSpecialOffer);
app.use("/api/customservice", customService);
app.use("/api/garageinformation", garageInformation);
app.use("/api/home", home);
app.use("/api/mechanicdetails", mechanicDetails);
app.use("/api/mechanicloggedindevices", loggedInDevice);
app.use("/api/mechanicsignup", mechanicSignUpRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/selectservice", selectService);
app.use("/api/serviceservice", serviceService);
app.use("/api/serviceinclude", serviceIncludes);
app.use("/api/servicetype", serviceType);
app.use("/api/trackorder", trackOrder);

module.exports = app;
