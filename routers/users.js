const router = require("express").Router();
const { getUsers, setUser } = require("../controllers/users");

router.get("/", getUsers);
router.post("/", setUser);

module.exports = router;
