import { Users } from './users.entity';
export declare class Countries {
    id: number;
    name: string;
    currency: string;
    currency_symbol: string;
    dialing_code: string;
    created_at: Date;
    updated_at: Date;
    users: Users[];
}
