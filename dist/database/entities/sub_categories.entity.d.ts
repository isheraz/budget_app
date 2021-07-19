declare enum type {
    INCOME = "INCOME",
    EXPENSE = "EXPENSE"
}
export declare class SubCategories {
    id: number;
    name: string;
    type: type;
    categories_id: number;
    created_at: Date;
    updated_at: Date;
}
export {};
