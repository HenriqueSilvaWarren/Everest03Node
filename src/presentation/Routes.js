const { Router } = require("express");

const router = Router()

const { UserController } = require("./controllers/UserController");

router.get("/", UserController.handle);

router.post("/customer", UserController.postUser);

router.get("/customer", UserController.getUser);

module.exports = router;
