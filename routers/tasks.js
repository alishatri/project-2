const router = require("express").Router();
const {
  getTasks,
  getTask,
  setTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", setTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
module.exports = router;
