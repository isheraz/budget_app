import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  amount: number;
  @Column({ length: 128 })
  description: string;
  @Column({ type: 'timestamp', nullable: true })
  date: Date;
  @Column()
  categories_id: number;
  @Column()
  sub_categories_id: number;
  @Column()
  users_id: number;
  @Column()
  expenses_id: number;
  @Column()
  groups_id: number;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
