import { IsString } from "class-validator";

export class LoginUserRequestDto {
    @IsString()
    email: string;

    @IsString()
    password: string;
}