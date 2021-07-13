import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Countries {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 32 })
    name: string;
    @Column({ length: 32 })
    currency: string;
    @Column({ length: 4 })
    currency_symbol: string;
    @Column({ length: 8 })
    dialing_code: string;
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}
