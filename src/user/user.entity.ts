import { 
    Entity,
    BaseEntity,
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    BeforeInsert 
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column({
        unique: true,
    })
    email: string;
    
    @Column({nullable: true})
    phone: string;
    
    @Column()
    password: string;

    @Column({nullable: true})
    email_verified_at: Date;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    async setPassword(password: string){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
    
}