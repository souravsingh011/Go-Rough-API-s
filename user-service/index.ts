import express, { Express } from "express";
import UserSignUpRoute from "./src/routes/userSignUp.route";
import AccountSettingRoute from "./src/routes/accountSetting.route";
import AddressInformationRoute from "./src/routes/addressInformation.route";
import PaymentRoute from "./src/routes/payment.route";
import VehicleRoute from "./src/routes/vehicle.route";
import { vehicleValidator } from "./src/validator/vehicle.validator";
import { accountSettingValidator } from "./src/validator/accountSetting.validator";
import { addressInformationValidator } from "./src/validator/addresslnformation.validator";
import { paymentValidator } from "./src/validator/payment.validator";
import { userSignUpValidator } from "./src/validator/userSignUp.validator";

const app: Express = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
app.use("/api/user/", userSignUpValidator, UserSignUpRoute);
app.use("/api/accountsetting/", accountSettingValidator, AccountSettingRoute);
app.use(
  "/api/addressinformation/",
  addressInformationValidator,
  AddressInformationRoute
);
app.use("/api/payment/", paymentValidator, PaymentRoute);
app.use("/api/vehicle/", vehicleValidator, VehicleRoute);

module.exports = app;
