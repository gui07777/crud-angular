import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from 'src/dtos/user-request.dto';
import { User } from 'src/schemas/user.schema';

@Controller('user')
export class UserController {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    @Post('register-user')
    registerUser(@Body() user: UserRequestDto) { // @Body() é usado porque se não tiver ele, ele nao lê o que vem no corpo da requisição, ficando undefined
        const newUser = new this.userModel(user)
        return newUser.save();
    }


}

/* o controller é o responsável pelas rotas http
nele podemos declarar como a rota deve ser
referenciada no frontend, e sua responsabilidade
se resume a isso */

/*
1) definir rota de cadastro (se o usuario ta cadastrando um usuário e uma senha então é um Post)
2) passar os dados recebidos da rota para o service
*/