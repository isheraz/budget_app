import { Countries } from './countries.entity';
export declare class Users {
    id: number;
    countries_id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    countries: Countries;
}
