import BoardPageSandra from "../pages/BoardPageSandra";
import BoardsSandra from "../pages/BoardsSandra";
import LoginPageSandra from "../pages/LoginPageSandra";

describe('Testing changing list position between the columns on Trello board', () => {

    const myTestingBoard = 'Testing Board - Sandra';

    beforeEach(() => {
        LoginPageSandra.openTrelloLoginPage();
        LoginPageSandra.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsSandra.boardsViewShouldBeVisible();
        BoardsSandra.openBoardByName(myTestingBoard);
    });

    it('Move list to next column', () => {
        BoardPageSandra.clickOnFirstListThreeDotMenu();
        BoardPageSandra.clickOnMoveListOption();
        BoardPageSandra.selectNextListPositionAndAssert();
        BoardPageSandra.clickOnMoveButton();
        BoardPageSandra.assertListName();
    });
    
    it('Move list back to initial column', () => {
        BoardPageSandra.clickOnSecondListThreeDotMenu();
        BoardPageSandra.clickOnMoveListOption();
        BoardPageSandra.selectInitialListPositionAndAssert();
        BoardPageSandra.clickOnMoveButton();
        BoardPageSandra.assertListName();
    });

});