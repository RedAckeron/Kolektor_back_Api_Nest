import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity('User_game_platform')
export class User_game_platformEntity {
    @PrimaryGeneratedColumn() id:string;
    
    @Column()
    private id_user: number;
    get Id_user(): number { return this.id_user; }
    set Id_user(v: number) { this.id_user = v; }

    @Column()
    private api_id_game: number;
    get Api_id_game(): number { return this.api_id_game; }
    set Api_id_game(v: number) { this.api_id_game = v; }
    
    @Column()
    private api_id_platform: number;
    get Api_id_platform(): number { return this.api_id_platform; }
    set Api_id_platform(v: number) { this.api_id_platform = v; }
    
    @Column()
    private cib_box: number; 
    get Cib_box(): number { return this.cib_box; }
    set Cib_box(v: number) { this.cib_box = v; }

    @Column()
    private cib_manual: number; 
    get Cib_manual(): number { return this.cib_manual; }
    set Cib_manual(v: number) { this.cib_manual = v; }
    
    @Column()
    private cib_game: number;
    get Cib_game(): number { return this.cib_game; }
    set Cib_game(v: number) { this.cib_game = v; }
        
    @Column({type:'bigint'})
    private dt_in:number=(Date.now()/1000);
    get Dt_in(): number { return this.dt_in; }
}
