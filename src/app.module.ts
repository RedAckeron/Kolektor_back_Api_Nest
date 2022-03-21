import { UserModule } from './game/user/user.module';
import { UserService } from './game/user/user.service';
import { UserController } from './game/user/user.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game/game.module';
@Module({
  imports: [TypeOrmModule.forRoot(), GameModule, UserModule],
  controllers: [ ],
  providers: [ ],
})
export class AppModule { }
