describe('Checking buttons on homepage', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
  });

  it('The main logo should be displayed', () => {
    cy.get(`.header_logo`).should('be.visible');
    cy.get(`.header_logo`).should("have.attr", "href", "/");
  });

  it('Home, About and Contacts buttons in navigation header should be displayed', () => {
    cy.get(`[class^="btn header-link"]`).should('have.length', 3);
    cy.get(`[class^="btn header-link"]`).first().should('have.text', 'Home');
    cy.get(`[class^="btn header-link"]`).eq(1).should('have.text', 'About');
    cy.get(`[class^="btn header-link"]`).last().should('have.text', 'Contacts');
  });

  it('Sign up button should be displayed', () => {
    cy.get(`button[class*="hero"]`).should('have.text', 'Sign up');
  });

  it('Facebook button should be visible and have a link', () => {
    cy.get(`[class$='icon-facebook']`).should('be.visible');
    cy.get(`a[href^="https://www.facebook.com"]`).should("have.attr", "href", "https://www.facebook.com/Hillel.IT.School");
  });

  it('Telegram button should be visible and have a link', () => {
    cy.get(`[class$='icon-telegram']`).should('be.visible');
    cy.get(`a[href^="https://t.me"]`).should("have.attr", "href", "https://t.me/ithillel_kyiv");
  });

  it('Youtube button should be visible and have a link', () => {
    cy.get(`[class$='icon-youtube']`).should('be.visible');
    cy.get(`a[href^="https://www.youtube.com"]`).should("have.attr", "href", "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1");
  });

  it('Instagram button should be visible and have a link', () => {
    cy.get(`[class$='icon-instagram']`).should('be.visible');
    cy.get(`a[href^="https://www.instagram.com"]`).should("have.attr", "href", "https://www.instagram.com/hillel_itschool/");
  });

  it('Linkedin button should be visible and have a link', () => {
    cy.get(`[class$='icon-linkedin']`).should('be.visible');
    cy.get(`a[href^="https://www.linkedin.com"]`).should("have.attr", "href", "https://www.linkedin.com/school/ithillel/");
  });

  it('Link to main page should be displayed', () => {
    cy.get(`[class$='display-4']`).should('be.visible');
    cy.get(`[class$='display-4']`).should("have.attr", "href", "https://ithillel.ua");
  });
  
  it('Link to email should be displayed', () => {
    cy.get(`[class$='h4']`).should('be.visible');
    cy.get(`[class$='h4']`).should("have.attr", "href", "mailto:developer@ithillel.ua");
  });

});	