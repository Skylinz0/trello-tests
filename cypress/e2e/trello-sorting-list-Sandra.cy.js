import BoardPageSandra from "../pages/BoardPageSandra";
import BoardsSandra from "../pages/BoardsSandra";
import LoginPageSandra from "../pages/LoginPageSandra";

describe('Testing creating a new list and sorting it by card names', () => {

    const myTestingBoard = 'Testing Board - Sandra';

    beforeEach(() => {
        LoginPageSandra.openTrelloLoginPage();
        LoginPageSandra.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsSandra.boardsViewShouldBeVisible();
        BoardsSandra.openBoardByName(myTestingBoard);
    });

    it('Creating a new list', () => {
        BoardPageSandra.clickOnAddAnotherListField();
        BoardPageSandra.typeListName();
        BoardPageSandra.clickOnAddListButtonAndAssert();
    });
    
    it('Adding a card with name that starts with A', () => {
        BoardPageSandra.clickOnAddCardInFourthList();
        BoardPageSandra.typeCardNameWithA();
        BoardPageSandra.assertCardNameWithA();
    });

    it('Adding a card with name that starts with X', () => {
        BoardPageSandra.clickOnAddCardInFourthList();
        BoardPageSandra.typeCardNameWithXAndAssert();
    });

    it('Adding a card with name that starts with B', () => {
        BoardPageSandra.clickOnAddCardInFourthList();
        BoardPageSandra.typeCardNameWithB();
        BoardPageSandra.assertCardNameWithB();
    });
    
    it('Sorting the list alphabetically, asserting A card is the first, X card is the last', () => {
        BoardPageSandra.clickOnFourthListThreeDotMenu();
        BoardPageSandra.clickOnSortByOption();
        BoardPageSandra.clickOnSortListAlphabeticallyOption();
        BoardPageSandra.assertAIsFirstAndXIsLast();
    });

    it('Sorting the list by date created - newest first', () => {
        BoardPageSandra.clickOnFourthListThreeDotMenu();
        BoardPageSandra.clickOnSortByOption();
        BoardPageSandra.clickOnSortListByNewestFirstOption();
        BoardPageSandra.assertCardNameWithB();
    });

    it.only('Sorting the list by date created - oldest first', () => {
        BoardPageSandra.clickOnFourthListThreeDotMenu();
        BoardPageSandra.clickOnSortByOption();
        BoardPageSandra.clickOnSortListByOldestFirstOption();
        BoardPageSandra.assertCardNameWithA();
    });

});