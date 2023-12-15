const router = require("express").Router();
const {
  getTasksStatus,
  getTaskStatus,
  setTaskStatus,
  updateTaskStatus,
  deleteTaskStatus,
} = require("../controllers/taskStatus");

router.get("/", getTasksStatus);
router.get("/:id", getTaskStatus);
router.post("/", setTaskStatus);
router.put("/", updateTaskStatus);
router.delete("/:id", deleteTaskStatus);
module.exports = router;
