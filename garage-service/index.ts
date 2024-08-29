import express from "express";
import { addServiceValidator } from "./src/validator/addservice.validator";
import { addSpecialOfferValidator } from "./src/validator/addspecialoffer.validator";
import { customServiceValidator } from "./src/validator/customservice.validator";
import { garageInformationValidator } from "./src/validator/garageinformation.validator";
import { mechanicSignUpValidator } from "./src/validator/mechanicsignup.validator";
import { homeValidator } from "./src/validator/home.validator";
import { mechanicDetailsValidator } from "./src/validator/mechanicdetails.validator";
import { mechanicLoggedInDeviceValidator } from "./src/validator/mechanicloggedindevices.validator";
import { paymentMethodValidator } from "./src/validator/paymentmethod.validator";
import { serviceValidator } from "./src/validator/service.validator";
import { serviceIncludeValidator } from "./src/validator/serviceincludes.validator";
import { serviceTypeValidator } from "./src/validator/servicetype.validator";
import { tackOrderValidator } from "./src/validator/trackorder.validator";
import { selectServiceValidator } from "./src/validator/selectservice.validator";

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
app.use("/api/addspecialoffer", addSpecialOfferValidator, addSpecialOffer);
app.use("/api/customservice", customServiceValidator, customService);
app.use(
  "/api/garageinformation",
  garageInformationValidator,
  garageInformation
);
app.use("/api/home", homeValidator, home);
app.use("/api/mechanicdetails", mechanicDetailsValidator, mechanicDetails);
app.use(
  "/api/mechanicloggedindevices",
  mechanicLoggedInDeviceValidator,
  loggedInDevice
);
app.use("/api/mechanicsignup", mechanicSignUpValidator, mechanicSignUpRoute);
app.use("/api/payment", paymentMethodValidator, paymentRoute);
app.use("/api/selectservice", selectServiceValidator, selectService);
app.use("/api/serviceservice", serviceValidator, serviceService);
app.use("/api/serviceinclude", serviceIncludeValidator, serviceIncludes);
app.use("/api/servicetype", serviceTypeValidator, serviceType);
app.use("/api/trackorder", tackOrderValidator, trackOrder);

module.exports = app;
