import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from 'src/dtos/user-request.dto';
import { User } from 'src/schemas/user.schema';

@Controller('user')
export class UserController {

    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    @Post('register-user')
    registerUser(@Body() user: UserRequestDto) { // @Body() é usado porque se não tiver ele, ele nao lê o que vem no corpo da requisição, ficando undefined
        const newUser = new this.userModel(user)
        console.log('modelo real para salvar no banco: ', newUser)
        return newUser.save();
    }

    @Post('verify-user')
    async verifyUser(@Body() user: UserRequestDto) {
        const foundUser = await this.userModel.findOne({ email: user.email }).exec();

        if (!foundUser) {
            return {
                success: false,
                message: 'usuário não encontrado'
            }
        }

        if (user.password !== foundUser.password) {
            return {
                success: false,
                message: 'senha incorreta'
            }
        }

        return {
            success: true,
            message: 'Usuário autenticado',
            canProceed: true
        }
    }

}