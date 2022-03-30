import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Entity } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private user: UserService) {}

  /*
   *@GET  /list_all : retourne un tableau avec la liste des login
   *@GET  /count_all : retourne le nombre de login total
   *@GET  /chk_cnt_login : retourne le nombre de login existant pour le login entrer en param
   *@Post /
   *@Post /
   */

  @Get('/list_all')
  async getAllUser() {
    //return this.user.findAll();
  }

  @Get('/count_all')
  async countAll() {
    return this.user.countAll();
  }

  @Get('/chk_cnt_login/:login')
  async chk_cnt_user(@Param('login') login: string) {
    return this.user.chk_cnt_user(login);
  }

  @Post('/login')
  async chk_user(@Body() dto: UserEntity) {
    const entity = new UserEntity();
    entity.id = dto.id;
    entity.Login = dto.Login;
    entity.Password = dto.Password;
    return this.user.chk_user(entity);
  }

  @Post('/add_user')
  async add_user(@Body() dto: UserEntity) {
    console.dir("a l arriver dans le nest : "+dto);
    
    let user_to_test=dto.Login
    this.user.chk_cnt_user(user_to_test).then((result) => {
        if (result == 0) {
        const entity = new UserEntity();
        //entity.id = dto.id;
        entity.Login = dto.Login;
        entity.Password = dto.Password;
        entity.Dt_last_log = Date.now()/1000;
        //entity.Dt_in = Date.now();
        return this.user.add_user(entity);
      }
      else console.dir("utilisateur existe deja");
    });
  }
}
