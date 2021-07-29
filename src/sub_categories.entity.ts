import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum type { INCOME = 'INCOME', EXPENSE = 'EXPENSE' }
@Entity()
export class Sub_Categories {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 32 })
    name: string;
    @Column('text')
    type: type;
    @Column()
    categories_id: number;
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}