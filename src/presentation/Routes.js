const { Router } = require("express");

const router = Router();

const { UserController } = require("./controllers/UserController");
const { PostUserController } = require("./controllers/PostUserController");
const { GetUserController } = require("./controllers/GetUserController");

router.get("/", UserController.handle);

router.post("/customer", PostUserController.handle);

router.get("/customer", GetUserController.handle);

module.exports = router;
