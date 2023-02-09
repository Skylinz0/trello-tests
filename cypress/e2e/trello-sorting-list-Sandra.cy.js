import BoardPageSandra from "../pages/BoardPageSandra";
import BoardsSandra from "../pages/BoardsSandra";
import LoginPageSandra from "../pages/LoginPageSandra";

describe('Testing creating a new list, adding it on watch, adding cards and sorting them', () => {

    const myTestingBoard = 'Testing Board - Sandra';

    beforeEach(() => {
        LoginPageSandra.openTrelloLoginPage();
        LoginPageSandra.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsSandra.boardsViewShouldBeVisible();
        BoardsSandra.openBoardByName(myTestingBoard);
    });

    it('Creating a new list, adding it on watch, adding three new cards, sorting them by name and by date, and archiving the list', () => {
        // Creating a new list
        BoardPageSandra.clickOnAddAnotherListField();
        BoardPageSandra.typeListName("Sorting list");
        BoardPageSandra.clickOnAddListButton();
        BoardPageSandra.assertListName("Sorting list");

        // Adding the list on watch
        BoardPageSandra.clickOnListThreeDotMenu(1);
        BoardPageSandra.clickOnWatchOption();
        BoardPageSandra.clickOnCloseListIcon();
        BoardPageSandra.assertWatchIcon();

        // Adding a card with name that starts with A
        BoardPageSandra.clickOnAddCardInList(1);
        BoardPageSandra.typeCardName("A team");
        BoardPageSandra.assertCardName("A team");

        // Adding a card with name that starts with X
        BoardPageSandra.clickOnAddCardAgainInList(1);
        BoardPageSandra.typeCardName("X team");
        BoardPageSandra.assertCardName("X team");

        // Adding a card with name that starts with B
        BoardPageSandra.clickOnAddCardAgainInList(1);
        BoardPageSandra.typeCardName("B team");
        BoardPageSandra.assertCardName("B team");

        // Sorting the list alphabetically, asserting A card is the first, X card is the last
        BoardPageSandra.clickOnListThreeDotMenu(1);
        BoardPageSandra.clickOnSortByOption();
        BoardPageSandra.clickOnSortListAlphabeticallyOption();
        BoardPageSandra.assertFirstCard("A team");
        BoardPageSandra.assertLastCard("X team");

        // Sorting the list by date created - newest first
        BoardPageSandra.clickOnListThreeDotMenu(1);
        BoardPageSandra.clickOnSortByOption();
        BoardPageSandra.clickOnSortListByNewestFirstOption();
        BoardPageSandra.assertCardName("B team");

        // Sorting the list by date created - oldest first
        BoardPageSandra.clickOnListThreeDotMenu(1);
        BoardPageSandra.clickOnSortByOption();
        BoardPageSandra.clickOnSortListByOldestFirstOption();
        BoardPageSandra.assertCardName("A team");

        // Archiving the list
        BoardPageSandra.clickOnListThreeDotMenu(1);
        BoardPageSandra.clickOnArchiveThisList();
        BoardPageSandra.assertListArchiving("Sorting list");
    });

});