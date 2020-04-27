import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkForAdmin } from "../middlewares/checkForAdmin";

const router = Router();

router.get("/", UserController.listAll);
router.get("/admin", [checkJwt, checkForAdmin()], UserController.listAllAdmin);
router.post("/:id([0-9]+)/admin", [checkJwt, checkForAdmin()], UserController.changeAdminStatus);
router.get("/usernameAvailable/:username", UserController.usernameAvailable);
router.post("/", UserController.newUser);
router.post("/:id([0-9]+)/password", [checkJwt, checkForAdmin()], UserController.changePassword);
router.delete("/:id([0-9]+)", [checkJwt, checkForAdmin()], UserController.deleteUser);

export default router;
