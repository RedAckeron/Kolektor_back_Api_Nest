import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from './game.entity';

@Injectable()
export class GameService {

    constructor(@InjectRepository(GameEntity) private repo: Repository<GameEntity>) {
    }

    async findAll(): Promise<GameEntity[]> {
        //return this.repo.find({where: {title: 'Demo-TypeOrm'}});
        return this.repo.find();
    }

    async findByName(name:string): Promise<GameEntity[]> {
        return this.repo.find({where: {title: 'super mario'}});
    }

    async countAll(): Promise<number> {
    return this.repo.count();
    }

    async insert(game: GameEntity): Promise<GameEntity> {
        return this.repo.save(game);
    }
}
