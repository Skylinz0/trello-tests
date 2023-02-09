import BoardPageMarily from "../pages/BoardPageMarily";
import BoardsMarily from "../pages/BoardsMarily";
import LoginPageMarily from "../pages/LoginPageMarily";

describe('Testing card actions', () => {
    const myKanbanBoard = 'Trello - Marily Testing Board';
    const myKanbanBoardUrl = 'https://trello.com/b/JUF1PpZe/trello-marily-testing-board';

    beforeEach(() => {
        LoginPageMarily.openTrelloLoginPage();
        LoginPageMarily.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsMarily.boardsViewShouldBeVisible();
        BoardsMarily.openBoardByName(myKanbanBoard);
    });

    it('Create column and check card basic functionalities', () => {
        BoardPageMarily.newList("Case0");
        BoardPageMarily.createCard("Test1");
        BoardPageMarily.editCard("Test1", "Named");
        BoardPageMarily.copyCard( "Named","Named1");
        BoardPageMarily.archiveCard("Named1");      
    });
});