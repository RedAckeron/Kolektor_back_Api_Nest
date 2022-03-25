import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity('Platform')
export class PlatformEntity {
    @PrimaryGeneratedColumn() id:string;
    
    @Column()
    private api_id_platform: number;

    @Column()
    private title: string;

    @Column({type:'bigint'})
    private dt_in:number=(Date.now()/1000);
   
    get Api_id_platform(): number { return this.api_id_platform; }
    set Api_id_platform(v: number) { this.api_id_platform = v; }

    get Title(): string { return this.title; }
    set Title(v: string) { this.title = v; }
    
    get Dt_in(): number { return this.dt_in; }

}
