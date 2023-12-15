const router = require("express").Router();
const {
  getUsers,
  setUser,
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", setUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
