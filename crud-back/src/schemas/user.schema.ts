import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    email: string;

    @Prop()
    senha: string;
}

export const UserSchema = SchemaFactory.createForClass(User)

//os schemas são tipos de arquivos que representam cada coleção/tabela do banco de dados
/* as suas responsabilidades incluem :
1) definir quais campos vão existir na coleção
2) definir o tipo de cada campo
3) definir regras de validação

de maneira geral, ele representa a estrutura da tabela

nesse caso, o user schema vai representar a tabela de usuarios do meu banco de dados
*/