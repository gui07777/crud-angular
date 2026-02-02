import { IsString } from 'class-validator';

export class UserRequestDto {
    @IsString()
    email: string;

    @IsString()
    password: string;
}