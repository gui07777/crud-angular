import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class User extends Document {
    @Prop({ required: true})
    email: string;

    @Prop({ required: true})
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User); // aqui User que é uma classe typescript é transformado em um schema do mongodb pela fabrica de schemas que usa o metodo criar para classe (nome da classe)

//os schemas são tipos de arquivos que representam cada coleção/tabela do banco de dados
/* as suas responsabilidades incluem :
1) definir quais campos vão existir na coleção
2) definir o tipo de cada campo
3) definir regras de validação

de maneira geral, ele representa a estrutura da tabela

nesse caso, o user schema vai representar a tabela de usuarios do meu banco de dados
*/