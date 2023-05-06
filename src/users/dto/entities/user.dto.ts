import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { AccessLevel } from "../../models/accessLevel.enum";
import { LocationDTO } from "./location.dto";

registerEnumType(AccessLevel, {
  name: 'AccessLevel',
});


@ObjectType()
export class UserDTO {

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  address: string;

  @Field(() => AccessLevel)
  accessLevel: AccessLevel;

  @Field(() => LocationDTO)
  homeLocation: LocationDTO;
}
