import { Inject, Injectable } from '@nestjs/common';
import * as mongo from 'mongodb';
import { DbConnectorService } from './db-connector.service';

@Injectable()
export class DbAccessorService {
    private readonly collections: { [name: string]: mongo.Collection } = {};

    constructor(private dbConnectorService: DbConnectorService)
    {
    }

    getCollection(name: string): mongo.Collection {
        if (this.collections[name]) {
          return this.collections[name];
        }
        const collection: mongo.Collection = this.dbConnectorService.connection.collection(name);
        this.collections[name] = collection;
        return collection;
    }
}
