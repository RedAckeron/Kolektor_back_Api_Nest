import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from './game.entity';

@Injectable()
export class GameService {

    constructor(@InjectRepository(GameEntity) private repo: Repository<GameEntity>) {
    }

    /*
    *GET findAll : retourne tout les resulstats
    */
    async findAll(): Promise<GameEntity[]> {
        //return this.repo.find({where: {title: 'Demo-TypeOrm'}});
        return this.repo.find();
    }

    async findByName(name:string): Promise<GameEntity[]> {
        return this.repo.find({where: {title:name,}});
    }

    async findplatform(id_game:number): Promise<GameEntity[]> {
        return this.repo.find({where: {title:name,}});
    }

    async countAll(): Promise<number> {
    return this.repo.count();
    }

    async insert(game: GameEntity): Promise<GameEntity> {
        console.log(game);
        //on verifie que le jeux existe pas deja sur le ctritere du titre
        const finded = await this.repo.findOne({where : {title: game.Title}});
        //console.log(finded);
        //si il existe pas on l injecte
        if(!finded)return this.repo.save(game);
    }
}
