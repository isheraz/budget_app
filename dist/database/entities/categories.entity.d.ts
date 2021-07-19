declare enum type {
    INCOME = "INCOME",
    EXPENSE = "EXPENSE"
}
export declare class Categories {
    id: number;
    name: string;
    type: type;
    created_at: Date;
    updated_at: Date;
}
export {};
