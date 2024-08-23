import express from "express";
import AccountSettingController from "../controller/accountSetting.controller";

const AccountSettingRoute = express.Router();
const accountSettingController = new AccountSettingController();

AccountSettingRoute.route("/")
  .post(accountSettingController.create)
  .get(accountSettingController.getAll);

AccountSettingRoute.route("/:id")
  .get(accountSettingController.getById)
  .put(accountSettingController.update)
  .delete(accountSettingController.delete);

export default AccountSettingRoute;
