import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { GameEntity } from './game.entity';
import { Entity } from 'typeorm';

@Controller('/game')
export class GameController {

  constructor(private service: GameService) { }

  @Get('/show_all')
  async findAll() { return this.service.findAll(); }

  //@Get('/count')
  //async countAll() {return this.service.countAll();}
  
  @Get('/show_one/:name')
  async findgame(name:string)
    {
    return this.service.findByName(name);
    }

  @Post('/add_one')
  async createOne(@Body() dto: any) 
    {
    //console.table(dto)
    const entity = new GameEntity();

    entity.Api_id_game = dto.api_id_game;
    
    entity.Title=dto.title;
    entity.Api_id_game = dto.api_id_game;
    //entity.Api_id_platform = dto.api_id_platform;
    entity.Dt_release=dto.dt_release;
    
    
    
    //console.table(dto)
    //console.table(entity)
    //insert dans table game
    return this.service.insert(entity);

    }
}