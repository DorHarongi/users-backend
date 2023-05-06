import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Document, InsertOneResult, ModifyResult } from 'mongodb';
import { UpdateUserInput } from '../../../users/dto/input/update-user.input';
import { UserDTO } from '../../dto/user.dto';
import { DbAccessorService } from '../../../database/services/db-accessor.service';
import { CreateUserInput } from '../../dto/input/create-user.input';
import { User } from '../../models/user.entity';

const COLLECTION_NAME = "usersCollection";

@Injectable()
export class UserRepositoryService {

    constructor(private dbAccessorService: DbAccessorService){}

    async getAllUsers(): Promise<UserDTO[]>{
        const usersWithMongoId: User[] = (await this.dbAccessorService.getCollection(COLLECTION_NAME).find().toArray()) as User[];
        const users: UserDTO[] = usersWithMongoId.map((user)=>{
            return new UserDTO(user.name, user.email, user.address, user.accessLevel, user.homeLocation);
        })
       return users;
    }

    async createUser(createUserData: CreateUserInput){
        const userWithTheSameName: User = (await this.dbAccessorService.getCollection(COLLECTION_NAME).findOne({
            name: createUserData.name
        })) as User;

        if(userWithTheSameName)
            throw new HttpException("User name already taken", HttpStatus.CONFLICT);

        const result: InsertOneResult = await this.dbAccessorService.getCollection(COLLECTION_NAME).insertOne(createUserData);
        return new UserDTO(createUserData.name, createUserData.email, createUserData.address,
        createUserData.accessLevel, createUserData.homeLocation);
    }
    
    async updateUser(updateUserData: UpdateUserInput)
    {
        const updatedUser: User = (await this.dbAccessorService.getCollection(COLLECTION_NAME).findOneAndUpdate(
            { name: updateUserData.name },
            { $set: updateUserData },
            { returnDocument: 'after' }
        )).value as User;

        return new UserDTO(updatedUser.name, updatedUser.email, updatedUser.address,
            updatedUser.accessLevel, updatedUser.homeLocation);
    }

}
