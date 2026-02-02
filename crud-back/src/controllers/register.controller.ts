import { Controller, Post } from '@nestjs/common';
import { RegisterService } from '../services/register.service';

@Controller('register')
export class RegisterController {

    constructor(
        private registerService: RegisterService
    ) { }

    @Post('register-user')
    createuser() {
        return this.registerService.createUser();
    }


}
