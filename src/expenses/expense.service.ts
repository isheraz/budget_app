import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expenses } from 'src/database/entities/expenses.entity';

@Injectable()
export class ExpenseService {

    constructor( 
        @InjectRepository(Expenses)
        private expenseRepository: Repository<Expenses>,
        ) {}
    
    getAllExpense(): Promise<Expenses[]> {
        return this.expenseRepository.find();
    }

    getExpense(id: number): Promise<Expenses> {
        return this.expenseRepository.findOne(id);
    }

    async insertExpense(amount: number, description: string, expense_date: Date, categories_id: number, user_id: number, paid_by: number,  paid_for_id: number, paid_for_type: string): Promise<{}> { 
        
        const obj =  this.expenseRepository.create();
        obj.amount = amount;
        obj.description = description;
        obj.expense_date = expense_date;
        obj.categories_id = categories_id;
        obj.users_id = user_id;
        obj.paid_by = paid_by;
        obj.paid_for_id = paid_for_id;
        obj.paid_for_type = paid_for_type;
        const resp = await this.expenseRepository.save(obj);
        const response = {status: true, response: resp, message: 'Successfully added.'};
        return response;
    }

    async remove(id: number): Promise<{}> {
        await this.expenseRepository.delete(id);
        const response = {status: true, message: 'Successfully deleted.'};
        return response;
    }

}
