import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    countries_id: number;
    @Column({ length: 32 })
    name: string;
    @Column({ length: 48 })
    email: string;
    @Column({ length: 16 })
    phone: string;
    @Column()
    password: string;
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
    @Column({ type: "timestamp", nullable: true })
    deleted_at: Date;
}