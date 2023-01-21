import BoardPageMarily from "../pages/BoardPageMarily";
import BoardsMarily from "../pages/BoardsMarily";
import LoginPageMarily from "../pages/LoginPageMarily";

describe('Testing menu bar', () => {   
    const myKanbanBoard = 'Trello - Marily Testing Board';
    const myKanbanBoardUrl = 'https://trello.com/b/JUF1PpZe/trello-marily-testing-board';

    beforeEach(() => {
        LoginPageMarily.openTrelloLoginPage();        
        LoginPageMarily.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsMarily.boardsViewShouldBeVisible();
        BoardsMarily.openBoardByName(myKanbanBoard);
    });

    it('Hide menu bar on the left (minimize)', () => {
        BoardPageMarily.boardUrlIsCorrect(myKanbanBoardUrl);
        cy.get('[data-testid="workspace-navigation-collapse-button]"').click();        
        cy.get('[data-testid="workspace-navigation-collapse-button]"').should('be.visible');
        cy.contains('Workspace navigation').should('be.visible');
        cy.get('[data-testid="workspace-navigation-collapse-button]"').click();           
        cy.contains('Workspace navigation').should('not.be.visible');
    });

    it.skip('Open menu bar', () => {
       
    });
});




