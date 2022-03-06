import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join as pjoin } from 'path'
import { AppService } from './app.service'
import { GeoEventResolver } from './resolvers/geo-event.resolver'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // TODO: configure for production
      rootPath: pjoin(
        __dirname,
        '../../../../frontend/dist/event-tracker-frontend',
      ),
    }),
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
  controllers: [],
  providers: [AppService, GeoEventResolver],
})
export class AppModule {}
