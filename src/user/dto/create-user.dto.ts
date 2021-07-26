import { Equals, IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { MESSAGE, REGEX } from "src/app.utils";

export class CreateUserDto {

    @IsNotEmpty()
    @Length(5, 50)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    phone: string;

    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {message: MESSAGE.PASSWORD_RULE_MESSAGE})
    password: string;
}