// src/app.ts
import express from "express";
const PORT = 3000;
const cityRoute = require("./src/routes/citry.router");
const pricehourRoute = require("./src/routes/pricehour.route");
const bookingRoute = require("./src/routes/bookingstatus.route");
const countryRoute = require("./src/routes/country.route");
const garagebusinesshourRoute = require("./src/routes/garagebusinesshours.route");
const dateRoute = require("./src/routes/date.route");
const lcClassRoute = require("./src/routes/lcclass.route");
const placeRoute = require("./src/routes/place.route");
const stateRoute = require("./src/routes/state.route");
const vehiclecolorRoute = require("./src/routes/vehiclecolor.route");
const vehiclemodelRoute = require("./src/routes/vehiclemodel.route");
const vehicletypeRoute = require("./src/routes/vehicletype.route");

// Load environment variables
const app = express();

// Middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Routes
app.use("/api/cities", cityRoute);
app.use("/api/pricehour", pricehourRoute);
app.use("/api/bookingstatus", bookingRoute);
app.use("/api/country", countryRoute);
app.use("/api/garagebusinesshours", garagebusinesshourRoute);
app.use("/api/date", dateRoute);
app.use("/api/lcclass", lcClassRoute);
app.use("/api/place", placeRoute);
app.use("/api/state", stateRoute);
app.use("/api/vehiclecolor", vehiclecolorRoute);
app.use("/api/vehiclemodel", vehiclemodelRoute);
app.use("/api/vehicletype", vehicletypeRoute);

module.exports = app;
