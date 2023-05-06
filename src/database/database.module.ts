import { Module } from '@nestjs/common';
import { DbAccessorService } from './services/db-accessor.service';
import { DbConnectorService } from './services/db-connector.service';

@Module({
  providers: [
    DbConnectorService,
    {
    provide: DbAccessorService,
    useFactory: async (dbConnectorService: DbConnectorService) => {
      await dbConnectorService.connect();
      return new DbAccessorService(dbConnectorService);
    },
    inject: [DbConnectorService]
  }],
  exports: [DbAccessorService]
})
export class DatabaseModule {}
