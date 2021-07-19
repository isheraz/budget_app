import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    email_verified_at: Date;
    created_at: Date;
    updated_at: Date;
    setPassword(password: string): Promise<void>;
}
