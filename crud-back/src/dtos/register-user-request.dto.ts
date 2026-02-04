import { IsString } from 'class-validator';

export class RegisterUserRequestDto {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    confirmPassword: string;
}