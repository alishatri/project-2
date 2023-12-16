const router = require("express").Router();
const {
  getTasksStatus,
  getTaskStatus,
  setTaskStatus,
  updateTaskStatus,
} = require("../controllers/taskStatus");

const {
  setTaskStatusValidationRules,
  validate,
} = require("../middlewares/TaskStatusValidator");

router.get("/", getTasksStatus);
router.get("/:id", getTaskStatus);
router.post("/", setTaskStatusValidationRules, validate, setTaskStatus);
router.put("/:id", updateTaskStatus);
module.exports = router;
