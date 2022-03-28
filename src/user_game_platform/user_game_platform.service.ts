import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User_game_platformEntity } from './user_game_platform.entity';
@Injectable()
export class User_game_platformService {

    constructor(@InjectRepository(User_game_platformEntity) private repo: Repository<User_game_platformEntity>) {}
    add_user_game_platform(ugp_to_send:User_game_platformEntity)
        {
        console.table(ugp_to_send)
        return this.repo.save(ugp_to_send);
        }
}
