import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>) {
}

async findAll(): Promise<UserEntity[]> 
    {
    return this.repo.find({});
    }
    
async countAll(): Promise<number> 
    {
    return this.repo.count({});
    }

async chk_user(user:UserEntity): Promise<any> 
    {
    return this.repo.find({where: {login: user.Login,password:user.Password}});
    } 

async chk_cnt_user(login:string): Promise<number> 
    {
    return this.repo.count({where: {login:login}});
    } 

async add_user(user:UserEntity): Promise<UserEntity> 
    {
    return this.repo.save(user);
    }
}