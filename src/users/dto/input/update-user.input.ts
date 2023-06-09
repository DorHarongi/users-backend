import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator"
import { AccessLevel } from "../../../users/models/accessLevel.enum";
import { LocationDTO } from "../location.dto";

registerEnumType(AccessLevel, {
    name: 'AccessLevel',
});

  
@InputType()
export class UpdateUserInput{
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    email: string;

    @Field()
    @IsNotEmpty()
    address: string;

    @Field()
    @IsNotEmpty()
    accessLevel: AccessLevel;

    @Field()
    @IsNotEmpty()
    homeLocation: LocationDTO;
}