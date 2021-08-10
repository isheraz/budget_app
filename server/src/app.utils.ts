import { HttpStatus, ValidationPipe } from "@nestjs/common";

const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const PASSWORD_RULE_MESSAGE = 'Password should have atleast one upper case, lower case along with a number and a special character';

const VALIDATION_PIPE = new ValidationPipe({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const REGEX = {
    PASSWORD_RULE,
}

export const MESSAGE = {
    PASSWORD_RULE_MESSAGE,
}

export const SETTINGS = {
    VALIDATION_PIPE,
}