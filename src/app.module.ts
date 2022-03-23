import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
@Module({
  imports: [TypeOrmModule.forRoot(), GameModule, UserModule],
  controllers: [ ],
  providers: [ ],
})
export class AppModule { }
