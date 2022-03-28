import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_game_platformController } from './user_game_platform.controller';
import { User_game_platformEntity } from './user_game_platform.entity';
import { User_game_platformService } from './user_game_platform.service';

@Module({
    imports: [TypeOrmModule.forFeature([User_game_platformEntity])],
    controllers: [User_game_platformController],
    providers: [User_game_platformService],
})
export class User_game_platformModule {}
