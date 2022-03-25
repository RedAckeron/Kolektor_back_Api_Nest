import { PlatformModule } from './platform/platform.module';
import { PlatformService } from './platform/platform.service';
import { PlatformController } from './platform/platform.controller';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
@Module({
  imports: [TypeOrmModule.forRoot(),PlatformModule, GameModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
