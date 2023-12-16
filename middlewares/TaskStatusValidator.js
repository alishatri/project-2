const { body, validationResult } = require("express-validator");

const setTaskStatusValidationRules = [
  body("status")
    .isIn(["TO_DO", "IN_PROGRESS", "BLOCKED", "IN_REVIEW", "DONE"])
    .withMessage(
      "Invalid task status. Must be one of: TO_DO, IN_PROGRESS, BLOCKED, IN_REVIEW, DONE"
    ),

  body("userId").isInt().withMessage("Invalid userId. Must be an integer"),
  body("taskId").isInt().withMessage("Invalid taskId. Must be an integer"),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { setTaskStatusValidationRules, validate };
