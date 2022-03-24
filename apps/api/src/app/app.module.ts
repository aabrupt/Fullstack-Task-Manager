import { Module, CacheModule } from "@nestjs/common";
import { FaunadbModule, FaunadbModuleOptions } from "nestjs-faunadb";
import { RedisClientOptions } from "redis";
import * as redisStore from "cache-manager-redis-store";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

const fdbOptions = {
  secret: "",
};

@Module({
  imports: [
    FaunadbModule.forRoot(),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      socket: {
        host: "",
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
