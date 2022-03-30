import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity('Game')
export class GameEntity {
    @PrimaryGeneratedColumn() id:string;
    @Column()
    private api_id_game: number;

    @Column()
    private title: string;

    @Column()
    private img: string;

    @Column({type:'bigint'})
    private dt_release: number;

    @Column({type:'bigint'})
    private dt_in:number=(Date.now()/1000);
   
    get Api_id_game(): number { return this.api_id_game; }
    set Api_id_game(v: number) { this.api_id_game = v; }

    get Title(): string { return this.title; }
    set Title(v: string) { this.title = v; }
    
    get Img(): string { return this.img; }
    set Img(v: string) { this.img = v; }
    
    get Dt_release(): number { return this.dt_release; }
    set Dt_release(v: number) { this.dt_release = v; }
    
    get Dt_in(): number { return this.dt_in; }

}
