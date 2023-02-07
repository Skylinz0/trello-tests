import BoardPageMarily from "../pages/BoardPageMarily";
import BoardsMarily from "../pages/BoardsMarily";
import LoginPageMarily from "../pages/LoginPageMarily";

describe('Testing columns', () => {   
    const myKanbanBoard = 'Trello - Marily Testing Board';
    const myKanbanBoardUrl = 'https://trello.com/b/JUF1PpZe/trello-marily-testing-board';

    beforeEach(() => {
        LoginPageMarily.openTrelloLoginPage();        
        LoginPageMarily.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsMarily.boardsViewShouldBeVisible();
        BoardsMarily.openBoardByName(myKanbanBoard);
    });   

    it('Create/Rename column list', () => {
       BoardPageMarily.selectcolumRow("TestList123", "NewColumn");               
    });

    it('Create/Copy list', () => {
        BoardPageMarily.copyColumn("CopyList","NewList");           
    });

    it('Create/Archive list', () => {
        BoardPageMarily.archiveColumn("ListIsArchived");       
    });
});
