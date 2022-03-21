import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn() id:string;
    
    @Column()
    private login: string; 
    @Column() 
    private password: string;   
    @Column() 
    private dt_in: Number; 
    @Column() 
    private dt_last_log: Number;     

    get Login(): string { return this.login; }
    set Login(v: string) { this.login = v; }
   
    get Password(): string { return this.password; }
    set Password(v: string) { this.password = v; }
    
    get Dt_last_log(): Number { return this.dt_last_log; }
    set Dt_last_log(v: Number) { this.dt_last_log = v; }
    
    get Dt_in(): Number { return this.dt_in; }
    set Dt_in(v: Number) { this.dt_in = v; }
}