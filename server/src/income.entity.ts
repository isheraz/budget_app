import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum type { LOAN = 'LOAN', INCOME = 'INCOME' }
@Entity()
export class Income {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    amount: number;
    @Column({ length: 128 })
    description: string;
    @Column({ type: "timestamp", nullable: true })
    income_date: Date;
    @Column()
    categories_id: number;
    @Column('text')
    type: type;
    @Column()
    users_id: number;
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
    @Column({ type: "timestamp", nullable: true })
    deleted_at: Date;
}