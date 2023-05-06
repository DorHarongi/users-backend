import { ObjectId } from "mongodb";
import { AccessLevel } from "./accessLevel.enum";
import { IDocument } from "./iDocument.interface";
import { Location } from "./location";

export class User implements IDocument
{
    _id: ObjectId;
    name: string;
    email: string;
    address: string;
    accessLevel: AccessLevel;
    homeLocation: Location;
    
}