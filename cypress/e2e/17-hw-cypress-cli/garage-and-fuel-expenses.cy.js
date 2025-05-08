import '/Users/macbookpro/Desktop/Hillel/aqa-advanced-2/aqa-advanced-2/cypress/support/commands.js'
import GaragePage from '/Users/macbookpro/Desktop/Hillel/aqa-advanced-2/aqa-advanced-2/cypress/page_objects/garage.js';
import ExpensePage from '/Users/macbookpro/Desktop/Hillel/aqa-advanced-2/aqa-advanced-2/cypress/page_objects/fuel-expenses.js';

describe('Adding the car and its fuel expenses', () => {

    const garagePage = new GaragePage(); 
    const expensePage = new ExpensePage();

    beforeEach(() => {
        cy.login(); 
    });

    it('Check the adding car to garage', () => {
        garagePage.addCarToGarage('Ford', 'Mondeo', '200000');
    });

    it('Check the adding car expense', () => {
        expensePage.addExpense(250000, 1000, 1500);
        cy.get(`.alert > p`).should('be.visible');
    });
});