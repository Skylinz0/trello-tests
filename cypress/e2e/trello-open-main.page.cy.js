describe('Opens Trello board', () => {
    it('Opens Trello board', () => {
        cy.visit('https://trello.com/login');
        cy.get('#user').type(Cypress.env('email'));
        cy.get('#login').click();

        cy.origin('https://id.atlassian.com', () => {
            cy.get('#google-auth-button').should('be.visible');
            cy.contains('Log in to continue to:');
            cy.get('#password').type(Cypress.env('password'));
            cy.get('#login-submit').click();
        });

        cy.get('.spinner').should('not.exist');
        cy.url().should('include', 'https://trello.com/u/liroh61536/boards');
        cy.contains('Most popular templates');
    });
});