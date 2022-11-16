const { Router }  = require("express");

const router = Router()

const UserController = require("./controllers/UserController");

router.get("/", UserController.handle);

module.exports = router;
