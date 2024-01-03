import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('O CEO trata qualquer orçamento');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
