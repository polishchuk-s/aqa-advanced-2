class ExpensePage {
    get expenseButton() {
        return cy.get('[routerlink="expenses"]');
    };
    get addExpenseButton() {
        return cy.get('.btn-primary');
    };
    get expenseMileageInput() {
        return cy.get('#addExpenseMileage');
    };
    get expenseLitersInput() {
        return cy.get('#addExpenseLiters');
    };
    get expenseTotalCostInput() {
        return cy.get('#addExpenseTotalCost');
    };
    get submitExpenseButton() {
        return cy.get('.modal-footer > .btn-primary');
    };

    addExpense(mileage, liters, totalCost) {
        this.expenseButton.click();
        this.addExpenseButton.click();
        this.expenseMileageInput.clear().type(mileage);
        this.expenseLitersInput.clear().type(liters);
        this.expenseTotalCostInput.clear().type(totalCost);
        this.submitExpenseButton.click();
    };
};

export default ExpensePage;