import '/Users/macbookpro/Desktop/Hillel/aqa-advanced-2/aqa-advanced-2/cypress/support/commands.js'

describe('Checking signup in registration modal', () => {
    beforeEach(() => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    });
  
    context('Check name field validation', () => {
        it ('Check error when name field is empty', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupName`).clear();
            cy.get(`#signupName`).click();
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Name required');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when name field is filled with invalid symbol', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupName`).clear();
            cy.get(`#signupName`).type('12');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Name is invalid');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when name in field is too short', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupName`).clear();
            cy.get(`#signupName`).type('a');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Name has to be from 2 to 20 characters long');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when name in field is too long', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupName`).clear();
            cy.get(`#signupName`).type('abcdabcdabcdabcdabcda');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Name has to be from 2 to 20 characters long');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
    });

    context('Check last name field validation', () => {
        it ('Check error when name field is empty', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupLastName`).clear();
            cy.get(`#signupLastName`).click();
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Last name required');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when last name field is filled with invalid symbol', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupLastName`).clear();
            cy.get(`#signupLastName`).type('12');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Last name is invalid');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when name in field is too short', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupLastName`).clear();
            cy.get(`#signupLastName`).type('a');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Last name has to be from 2 to 20 characters long');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when name in field is too long', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupLastName`).clear();
            cy.get(`#signupLastName`).type('abcdabcdabcdabcdabcda');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Last name has to be from 2 to 20 characters long');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
    });

    context('Check email field validation', () => {
        it ('Check error when email field is empty', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupEmail`).clear();
            cy.get(`#signupEmail`).click();
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Email required');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when email is incorrect', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupEmail`).clear();
            cy.get(`#signupEmail`).type('a@s.');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Email is incorrect');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
    });

    context('Check password field validation', () => {
        it ('Check error when password field is empty', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupPassword`).clear();
            cy.get(`#signupPassword`).click();
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Password required');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when password in field is incorrect', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupPassword`).clear();
            cy.get(`#signupPassword`).type('abcd1234');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when password in field is too short', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupPassword`).clear();
            cy.get(`#signupPassword`).type('abcd123');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when password in field is too long', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupPassword`).clear();
            cy.get(`#signupPassword`).type('abcdabcdabcdabcdabcda');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });

    });

    context('Check re-enter password field validation', () => {
        it ('Check error when re-enter password field is empty', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupRepeatPassword`).clear();
            cy.get(`#signupRepeatPassword`).click();
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Re-enter password required');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
        it ('Check error when re-enter password in field does not match password', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupPassword`).clear();
            cy.get(`#signupPassword`).type('abcD1234');
            cy.get(`#signupRepeatPassword`).clear();
            cy.get(`#signupRepeatPassword`).type('abcD1235');
            cy.press(Cypress.Keyboard.Keys.TAB);
            cy.get(`.invalid-feedback > p`).should('have.text', 'Passwords do not match');
            cy.get(`.invalid-feedback > p`).should('have.css', 'border-bottom-color', 'rgb(220, 53, 69)');
            cy.get(`.modal-footer > .btn`).should('be.disabled');
        });
    });

    context('Successful user creation', () => {
        const timestamp = new Date().getTime();
        const email = `johndoe+${timestamp}@sample.com`;

        it ('Check successful user creation', () => {
            cy.get(`button[class*="hero"]`).click();
            cy.get(`#signupName`).clear();
            cy.get(`#signupName`).type('John');
            cy.get(`#signupLastName`).clear();
            cy.get(`#signupLastName`).type('Doe');
            cy.get(`#signupEmail`).clear();
            cy.get(`#signupEmail`).type(email);
            cy.get(`#signupPassword`).clear();
            cy.get(`#signupPassword`).type('abcD1234',{ sensitive: true });
            cy.get(`#signupRepeatPassword`).clear();
            cy.get(`#signupRepeatPassword`).type('abcD1234', { sensitive: true });
            cy.get(`.modal-footer > .btn`).click();
            cy.get(`.alert > p`).should('be.visible');
        });

        it ('Check that user can login', () => {
            cy.login(email, 'abcD1234');
        })
    });

});
