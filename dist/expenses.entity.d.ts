declare enum paid_for_type {
    USER = "USER",
    GROUP = "GROUP"
}
export declare class Expenses {
    id: number;
    amount: number;
    description: string;
    expense_date: Date;
    categories_id: number;
    users_id: number;
    paid_by: number;
    paid_for_type: paid_for_type;
    paid_for_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
export {};