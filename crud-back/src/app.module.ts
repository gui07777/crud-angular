import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { UserSchema, User } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Guilherme:Nick%232006@teste1.ovhsxq0.mongodb.net/?appName=Teste1'),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { }
