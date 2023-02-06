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

    it('Moving list to next column and then back to initial column', () => {
        // Creating a first list
        BoardPageSandra.clickOnAddAnotherListField();
        BoardPageSandra.typeListName("List 1");
        BoardPageSandra.clickOnAddListButton();
        BoardPageSandra.assertListName("List 1");
        
        // Creating a second list
        BoardPageSandra.clickOnAddAnotherListField();
        BoardPageSandra.typeListName("List 2");
        BoardPageSandra.clickOnAddListButton();
        BoardPageSandra.assertListName("List 2");
        
        // Moving list to next column
        BoardPageSandra.clickOnListThreeDotMenu(1);
        BoardPageSandra.clickOnMoveListOption();
        BoardPageSandra.selectListPositionAndAssert("2");
        BoardPageSandra.clickOnMoveListButton(0);
        BoardPageSandra.assertListName("List 1");
    
        // Moving list back to initial column
        BoardPageSandra.clickOnListThreeDotMenu(2);
        BoardPageSandra.clickOnMoveListOption();
        BoardPageSandra.selectListPositionAndAssert("1");
        BoardPageSandra.clickOnMoveListButton(0);
        BoardPageSandra.assertListName("List 1");

        // Archiving the first list
        BoardPageSandra.clickOnListThreeDotMenu(1);
        BoardPageSandra.clickOnArchiveThisList();
        BoardPageSandra.assertListArchiving("List 1");

        // Archiving the second list
        BoardPageSandra.clickOnListThreeDotMenu(1);
        BoardPageSandra.clickOnArchiveThisList();
        BoardPageSandra.assertListArchiving("List 2");
    });

});