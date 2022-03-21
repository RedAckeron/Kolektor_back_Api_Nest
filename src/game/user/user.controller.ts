import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
    constructor(private user : UserService){}
/*
*@GET getalluser : 
*@GET countAll : 
*@GET chk_login
 */
@Get()
async getAllUser() { return ""};

@Get('/info/:id')
  async countAll() {return "";}

@Get('/login')
async chk_login(@Body() dto: UserEntity) 
  {
  const entity = new UserEntity();
  entity.id = dto.id;
  entity.Login = dto.Login;
  entity.Password = dto.Password;
  console.log(entity)
  return this.user.chk_user(entity);
  }

@Post('/add_user')
async add_user(@Body() dto:UserEntity)
  {
    const entity = new UserEntity();
    entity.id = dto.id;
    entity.Login=dto.Login;
    entity.Password=dto.Password;
    entity.Dt_last_log=dto.Dt_last_log;
    entity.Dt_in=dto.Dt_in;

    return this.user.add_user(entity);

  }
/*
@Post()
async createOne(@Body() dto: UserEntity) 
  {
  const entity = new UserEntity();
  entity.id = dto.id;
  entity.Login = dto.Login;
  return this.user.insert(entity);
  }
  */
}
