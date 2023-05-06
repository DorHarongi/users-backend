import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { AccessLevel } from "../models/accessLevel.enum";
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

  constructor(name: string, email: string, address: string, accessLevel: AccessLevel, homeLocation: LocationDTO)
  {
    this.name = name;
    this.email = email;
    this.address = address;
    this.accessLevel = accessLevel;
    this.homeLocation = homeLocation;
  }
}
