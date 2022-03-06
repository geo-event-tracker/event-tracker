import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join as pjoin } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GeoEventResolver } from './resolvers/geo-event.resolver'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: pjoin(__dirname, '../../../src/model/schema.gql'),
      sortSchema: true,
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GeoEventResolver],
})
export class AppModule {}
