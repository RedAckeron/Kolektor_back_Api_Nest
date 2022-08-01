import { Injectable } from '@nestjs/common';
import { PlatformEntity } from './platform.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlatformService {
    constructor(@InjectRepository(PlatformEntity) private repo: Repository<PlatformEntity>) {}

    async show_one(id:number): Promise<PlatformEntity[]> {
        //return this.repo.find({where: {title: 'Demo-TypeOrm'}});
        return this.repo.find({where:{api_id_platform:id}});
    }

    async insert(platform: PlatformEntity): Promise<PlatformEntity> {
        //console.log(platform);
        //on verifie que le jeux existe pas deja sur le ctritere du titre
        const finded = await this.repo.findOne({where : {title: platform.Title}});
        //console.log(finded);
        //si il existe pas on l injecte
        console.table(platform)
        if(!finded)return this.repo.save(platform);
    }
}
