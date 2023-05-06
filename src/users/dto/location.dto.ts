import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType("LocationInput")
@ObjectType("LocationType")
export class LocationDTO
{
    @Field()
    longitude: number;

    @Field()
    latitude: number;
}