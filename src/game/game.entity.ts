import { createSecureContext } from 'tls';
import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity('Game')
export class GameEntity {
    @PrimaryGeneratedColumn() id:string;

    @Column()
    private title: string;
    @Column()
    private dt_release: string;
    @Column({type:'bigint'})
    private dt_in:number=Date.now();

    get Title(): string { return this.title; }
    set Title(v: string) { this.title = v; }
    get Dt_release(): string { return this.dt_release; }
    set Dt_release(v: string) { this.dt_release = v; }
    get Dt_in(): number { return this.dt_in; }

}
