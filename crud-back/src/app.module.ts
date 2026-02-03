import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { UserSchema, User } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Guilherme:Nick%232006@teste1.ovhsxq0.mongodb.net/crud-angular?appName=Teste1'), // depois da / de .net eu posso escolher o nome do meu banco pra criar ele se nao existir ou colocar oo nome de um banco meu que ja existe
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ],

  /*
  o MongooseModule.forFeature() é um método utilizado para | registrar schemas  &  criar models | do mongoose dentro de módulos específicos.
  
  */

  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { }