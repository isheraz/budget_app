declare enum type {
    LOAN = "LOAN",
    INCOME = "INCOME"
}
export declare class Income {
    id: number;
    amount: number;
    description: string;
    income_date: Date;
    categories_id: number;
    type: type;
    users_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
export {};
