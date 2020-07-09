const Validator = require("validator");
const validText = require("./valid-text");

const validateTaskInput = (data) => {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.elapsedTime = validText(data.elapsedTime) ? data.elapsedTime : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required"
  }

  if (Validator.isEmpty(data.elapsedTime)) {
    errors.elapsedTime = "Time field is required"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}

module.exports = validateTaskInput;
