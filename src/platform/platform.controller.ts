import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlatformEntity } from './platform.entity';
import { PlatformService } from './platform.service';

@Controller('/platform')
export class PlatformController {
    constructor(private service: PlatformService) { }

@Get('/show_all')
show_all()
    {

    }
@Get('/show_one/:id')
show_one()
    {

    }

@Post('/add_one')
async add_platform(@Body() dto: any) 
    {
    const entity = new PlatformEntity();
    entity.Api_id_platform = dto.Api_id_platform;
    entity.Title=dto.Title;
    
    //console.table(dto)
    //console.table(entity)
    //insert dans table game
    //console.table(entity)
    return this.service.insert(entity);

    }



}
