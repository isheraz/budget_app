import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Expenses {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    amount: number;
    @Column({ length: 128 })
    description: string;
    @Column({ type: "timestamp", nullable: true })
    expense_date: Date;
    @Column()
    categories_id: number;
    @Column()
    users_id: number;
    @Column()
    paid_by: number;
    @Column()
    paid_for_type: string;
    @Column()
    paid_for_id: number;
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
    @Column({ type: "timestamp", nullable: true })
    deleted_at: Date;
}