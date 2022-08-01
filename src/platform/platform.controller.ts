import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatformEntity } from './platform.entity';

@Controller('/platform')
export class PlatformController {
    constructor(private service: PlatformService) { }

@Get('/show_all')
show_all()
    {

    }
    //async show_all_for_user(@Param('id') id:number)

@Get('/show_one/:id')
async show_one(@Param('id') id:number)
    {
    return this.service.show_one(id)
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
