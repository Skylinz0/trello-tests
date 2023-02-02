import BoardPage from "../pages/BoardPage";
import BoardPageErlend from "../pages/BoardPageErlend";
import BoardsErlend from "../pages/BoardsErlend";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Testing Board - Erlend';
    const myKanbanBoardUrl = 'https://trello.com/b/vYnBchTo/testing-board-erlend';

    beforeEach(() => {
        LoginPage.openTrelloLoginPage();

        //this information is kept in file cypress.congig.js, block 'env'
        LoginPage.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsErlend.boardsViewShouldBeVisible();
        BoardsErlend.openBoardByName(myKanbanBoard);
    });

    // WEEK 1

    it('Checks that my Trello board is open', () => {
        BoardPageErlend.boardUrlIsCorrect(myKanbanBoardUrl);
    });

    it('Change workspace visibility', () => {
       BoardPageErlend.visibilityChange();
    });

    it('Change workspace background color', () => {
        BoardPageErlend.changeBackgroundColor();
     });

    it('Check that background color is the same as selected', () => {
    BoardPageErlend.checkBackgroundColor();
    });

    //WEEK2

    it('Set list limit, add cards more than limit, check limit information and background color', () => {
        BoardPageErlend.setListLimit();
        BoardPageErlend.addCards();
        BoardPageErlend.checkBackgroundColorListLimitExeeded();

    });

    it.only('Remove list limit, assert that limit information is not visible ', () => {
        BoardPageErlend.removeListLimit();

    });

});