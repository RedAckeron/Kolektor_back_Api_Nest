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
    return this.repo.find({where: {title: 'Demo-TypeOrm'}});
    }

async chk_user(user:UserEntity): Promise<UserEntity[]> 
    {
    return this.repo.find({where: {login: user.Login,password:user.Password}});
    } 

async add_user(user:UserEntity): Promise<UserEntity> 
    {
    console.table(user)
    return this.repo.save(user);
    }
/*
async insert(user: UserEntity): Promise<UserEntity> 
    {
    return this.repo.save(user);
    }  
*/
}