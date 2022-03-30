import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn()id:string;
    
    @Column()
    private login: string; 
    @Column() 
    private password: string;   
    @Column() 
    private dt_in:number=(Date.now()/1000);
    @Column() 
    private dt_last_log: number;
    
    get Login(): string { return this.login; }
    set Login(v: string) { this.login = v; }
   
    get Password(): string { return this.password; }
    set Password(v: string) { this.password = v; }
    
    get Dt_last_log(): number { return this.dt_last_log; }
    set Dt_last_log(v: number) { this.dt_last_log = v; }
    
    get Dt_in(): number { return this.dt_in; }
    set Dt_in(v: number) { this.dt_in = v; }
}