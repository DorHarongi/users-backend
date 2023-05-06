import { Injectable } from '@nestjs/common';
import * as mongo from 'mongodb';

@Injectable()
export class DbConnectorService{
    connection: mongo.Db;
    async connect(): Promise<mongo.Db>
    {
        let mongoClient: mongo.MongoClient = await mongo.MongoClient.connect('mongodb://localhost:27017');
        if(mongoClient == undefined)
        {
            console.log("Mongo down. trying again...")
            await this.connect();
        }
        else
        {
            console.log("Connected to db succesfully");
            return this.connection = mongoClient.db('users');
        }
    }
}

