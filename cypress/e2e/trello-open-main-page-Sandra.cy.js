import BoardPageSandra from "../pages/BoardPageSandra";
import BoardsSandra from "../pages/BoardsSandra";
import LoginPageSandra from "../pages/LoginPageSandra";

describe('Testing opening Trello board', () => {

    const myTestingBoard = 'Testing Board - Sandra';
    const myTestingBoardUrl = 'https://trello.com/b/YVBNDZ1K/testing-board-sandra';

    beforeEach(() => {
        LoginPageSandra.openTrelloLoginPage();
        LoginPageSandra.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsSandra.boardsViewShouldBeVisible();
        BoardsSandra.openBoardByName(myTestingBoard);
    });

    it('Checking that specific Trello board is open', () => {
        BoardPageSandra.boardUrlIsCorrect(myTestingBoardUrl);
    });

});