import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { GameEntity } from './game.entity';

@Controller('/game')
export class GameController {

  constructor(private service: GameService) { }

  @Get()
  async findAll() { return this.service.findAll(); }

  @Get('/count')
  async countAll() {return this.service.countAll();}
  
  @Get('/findgame/:name')
  async findgame()
    {
      
    }

  @Post()
  async createOne(@Body() dto: GameEntity) {

    console.table(dto)
    const entity = new GameEntity();
    entity.Title = dto.Title;
    entity.Dt_release=dto.Dt_release;
   
    return this.service.insert(entity);
  }
}