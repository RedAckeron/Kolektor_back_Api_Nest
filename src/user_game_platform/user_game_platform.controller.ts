import { Body, Controller, Get, Post } from '@nestjs/common';
import { User_game_platformEntity } from './user_game_platform.entity'; 
import { User_game_platformService } from './user_game_platform.service';
@Controller('user_game_platform')
export class User_game_platformController {

constructor(private service: User_game_platformService) { }

@Post('/add_one')
async add_platform(@Body() ugp_to_send_tmp: User_game_platformEntity) 
    {
    const ugp_to_send = new User_game_platformEntity();
    ugp_to_send.Id_user=ugp_to_send_tmp.Id_user
    ugp_to_send.Api_id_game=ugp_to_send_tmp.Api_id_game
    ugp_to_send.Api_id_platform=ugp_to_send_tmp.Api_id_platform
    ugp_to_send.Cib_box=ugp_to_send_tmp.Cib_box
    ugp_to_send.Cib_game=ugp_to_send_tmp.Cib_game
    ugp_to_send.Cib_manual=ugp_to_send_tmp.Cib_manual
    return this.service.add_user_game_platform(ugp_to_send);
    }



}
