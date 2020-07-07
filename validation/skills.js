const Validator = require("validator");
const validText = require("./valid-text");

const validateSkillInput = (data) => {
    let errors = {};

    data.category = validText(data.category) ? data.category : "";
    data.title = validText(data.title) ? data.title : "";
    
    if (Validator.isEmpty(data.category)) {
        errors.category = "Skill must have a category";
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = "Title field is required"
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}

module.exports = validateSkillInput;