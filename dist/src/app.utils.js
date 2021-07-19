"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS = exports.MESSAGE = exports.REGEX = void 0;
const common_1 = require("@nestjs/common");
const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PASSWORD_RULE_MESSAGE = 'Password should have atleast one upper case, lower case along with a number and a special character';
const VALIDATION_PIPE = new common_1.ValidationPipe({
    errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
});
exports.REGEX = {
    PASSWORD_RULE,
};
exports.MESSAGE = {
    PASSWORD_RULE_MESSAGE,
};
exports.SETTINGS = {
    VALIDATION_PIPE,
};
//# sourceMappingURL=app.utils.js.map