import { User_game_platformModule } from './user_game_platform/user_game_platform.module';
import { PlatformModule } from './platform/platform.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PlatformModule,
    GameModule,
    UserModule,
    User_game_platformModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
