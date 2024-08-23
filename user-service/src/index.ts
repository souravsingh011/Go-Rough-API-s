import express, { Express, Request, Response } from "express";
import UserSignUpRoute from "./routes/userSignUp.route";
import AccountSettingRoute from "./routes/accountSetting.route";
import AddressInformationRoute from "./routes/addressInformation.route";
import PaymentRoute from "./routes/payment.route";
import VehicleRoute from "./routes/vehicle.route";

const app: Express = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
app.use("/api/user/", UserSignUpRoute);
app.use("/api/accountsetting/", AccountSettingRoute);
app.use("/api/addressinformation/", AddressInformationRoute);
app.use("/api/payment/", PaymentRoute);
app.use("/api/vehicle/", VehicleRoute);

module.exports = app;
