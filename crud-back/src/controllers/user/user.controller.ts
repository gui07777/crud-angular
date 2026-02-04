import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginUserRequestDto } from 'src/dtos/login-user-request.dto';
import { RegisterUserRequestDto } from 'src/dtos/register-user-request.dto';
import { User } from 'src/schemas/user.schema';

@Controller('user')
export class UserController {

    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    @Post('register-user')
    registerUser(@Body() user: RegisterUserRequestDto) { // @Body() é usado porque se não tiver ele, ele nao lê o que vem no corpo da requisição, ficando undefined
        const newUser = new this.userModel(user)
        return newUser.save();
    }

    @Post('verify-user')
    async verifyUser(@Body() user: LoginUserRequestDto) {
        const foundUser = await this.userModel.findOne({ email: user.email }).exec();

        if (!foundUser) {
            throw new HttpException(
                { message: 'usuário não encontrado' },
                HttpStatus.NOT_FOUND
            );
        }

        if (user.password !== foundUser.password) {
            throw new HttpException(
                { message: 'as senhas não coincidem' },
                HttpStatus.BAD_REQUEST
            )
        }

        return {
            success: true,
            message: 'Usuário autenticado',
            canProceed: true,
            foundUser: foundUser._id
        }
    }

    @Get('get-name/:id')
    async getName(@Param('id') userId: string) { //o @Body() sempre vai esperar receber um objeto, entao aqui eu trouxe do front o userId como um objeto e tentei usar findById que so aceita string, entao eu precisei extrair do body (no argumento) o userId retornado pra poder usar no findById
        console.log('userId vindo frontend', userId)
        var response = await this.userModel.findById(userId).select('name');
        return response;
    }

}