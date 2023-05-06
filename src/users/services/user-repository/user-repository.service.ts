import { Injectable } from '@nestjs/common';
import { Document, InsertOneResult } from 'mongodb';
import { UpdateUserInput } from '../../../users/dto/input/update-user.input';
import { UserDTO } from '../../dto/entities/user.dto';
import { DbAccessorService } from '../../../database/services/db-accessor.service';
import { CreateUserInput } from '../../dto/input/create-user.input';
import { User } from '../../models/user.entity';

const COLLECTION_NAME = "usersCollection";

@Injectable()
export class UserRepositoryService {

    constructor(private dbAccessorService: DbAccessorService){}

    async getAllUsers(): Promise<UserDTO[]>{
        return (await this.dbAccessorService.getCollection(COLLECTION_NAME).find().toArray()) as User[] as any as UserDTO[];
    }

    async createUser(createUserData: CreateUserInput): Promise<UserDTO> {
        let result: InsertOneResult = await this.dbAccessorService.getCollection(COLLECTION_NAME).insertOne(createUserData);
        return undefined;
    }
    
    async updateUser(updateUserData: UpdateUserInput): Promise<UserDTO>
    {
        const result: Document = await this.dbAccessorService.getCollection(COLLECTION_NAME).findOneAndUpdate(
            { name: updateUserData.name },
            { $set: updateUserData },
        );
        return result.value;
    }

}
