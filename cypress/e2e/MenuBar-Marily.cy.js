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

    it('Hide/Open menu bar', () => {
        BoardPageMarily.hidemenuBar();
        BoardPageMarily.showmenuBar();      
       
    });
});




