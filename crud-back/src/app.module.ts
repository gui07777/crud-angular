import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './controllers/login.controller';
import { RegisterController } from './controllers/register.controller';
import { RegisterService } from './services/register.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/crud-angular')
  ],
  controllers: [AppController, LoginController, RegisterController],
  providers: [AppService, RegisterService],
})
export class AppModule { }
