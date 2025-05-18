import '/Users/macbookpro/Desktop/Hillel/aqa-advanced-2/aqa-advanced-2/cypress/support/commands.js'
import GaragePage from '/Users/macbookpro/Desktop/Hillel/aqa-advanced-2/aqa-advanced-2/cypress/page_objects/garage.js';
import ExpensePage from '/Users/macbookpro/Desktop/Hillel/aqa-advanced-2/aqa-advanced-2/cypress/page_objects/fuel-expenses.js';

describe('Adding the car and its fuel expenses', () => {

    const garagePage = new GaragePage(); 
    const expensePage = new ExpensePage();

    beforeEach(() => {
        cy.login(); 
    });

    let carId;

    it('Check the adding car to garage', () => {
        cy.intercept('POST', 'https://qauto.forstudy.space/api/cars').as('postCar');
        garagePage.addCarToGarage('Ford', 'Mondeo', '200000');
        cy.wait('@postCar').then((interception) => {
            expect(interception.response.statusCode).to.eq(201);
            carId = interception.response.body.data.id;
        });
    });

    it('Check that car was added', () => {
        cy.get('.panel-page_heading > .btn').click();
        cy.request({
            method: 'GET',
            url:'https://qauto.forstudy.space/api/cars',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data[0]).to.have.property('brand', 'Ford');
            expect(response.body.data[0]).to.have.property('model', 'Mondeo');
            expect(response.body.data[0]).to.have.property('mileage', 200000);
            expect(response.body.data[0]).to.have.property('id').to.eq(carId);
        });
    })

    it('Check the adding expenses via API', () => {
        cy.get('.panel-page_heading > .btn').click();
        cy.addExpenses(carId);
    });

    it('Check the added car and expenses via UI', () => {
        cy.get('.car').should('be.visible');
        cy.get('.car_name').should('have.text', 'Ford Mondeo');
        cy.get(`a[routerlink='/panel/expenses'][class = "btn header-link"]`).click();
        cy.contains('#carSelectDropdown', 'Ford Mondeo').should('be.visible');
        cy.get('[class*="table expenses"]')
        .contains(250000)
        .parent('tr')
        .then(expenseRow => {
            cy.wrap(expenseRow).find('td').eq(2).should('have.text', '1000L');
            cy.wrap(expenseRow).find('td').eq(3).should('have.text', '1500.00 USD');
        });
    });
});