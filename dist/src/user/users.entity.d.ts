import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}
