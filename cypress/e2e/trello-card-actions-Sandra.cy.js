import BoardPageSandra from "../pages/BoardPageSandra";
import BoardsSandra from "../pages/BoardsSandra";
import LoginPageSandra from "../pages/LoginPageSandra";

describe('Testing actions with cards', () => {

    const myTestingBoard = 'Testing Board - Sandra';

    beforeEach(() => {
        LoginPageSandra.openTrelloLoginPage();
        LoginPageSandra.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsSandra.boardsViewShouldBeVisible();
        BoardsSandra.openBoardByName(myTestingBoard);
    });

    it('Creating two lists and one card, opening card details, adding and removing a label, moving a card to another list, closing card details', () => {
        // Creating a first list
        BoardPageSandra.clickOnAddAnotherListField();
        BoardPageSandra.typeListName("List 1");
        BoardPageSandra.clickOnAddListButton();
        BoardPageSandra.assertListName("List 1");

        // Adding a card to first list
        BoardPageSandra.clickOnAddCardInList(1);
        BoardPageSandra.typeCardName("Card 1");
        BoardPageSandra.assertCardName("Card 1");
    
        // Creating a second list
        BoardPageSandra.clickOnAddAnotherListField();
        BoardPageSandra.typeListName("List 2");
        BoardPageSandra.clickOnAddListButton();
        BoardPageSandra.assertListName("List 2");

        // Opening card details
        BoardPageSandra.openCardDetailsInList(1);

        // Opening label details
        BoardPageSandra.openLabelDetails();

        // Adding a label to card and closing label details
        BoardPageSandra.addPurpleLabel();
        BoardPageSandra.closeLabelDetails();
        BoardPageSandra.assertPurpleLabelVisible();

        // Removing a label from card and closing label details
        BoardPageSandra.openCardLabel();
        BoardPageSandra.searchForLabel("purple");
        BoardPageSandra.clickOnLabel();
        BoardPageSandra.closeLabelDetails();
        BoardPageSandra.assertPurpleLabelNotVisible();

        // Moving a card to another list
        BoardPageSandra.clickOnMoveItemInList(1);
        BoardPageSandra.selectList("List 2");
        BoardPageSandra.clickOnMoveCardButton();

        // Closing card details
        BoardPageSandra.clickOnClosingIcon();

        // Asserting card location and name
        BoardPageSandra.assertCardLocationAndName(2, "Card 1");

        // Archiving the first list
        BoardPageSandra.clickOnListThreeDotMenu(2);
        BoardPageSandra.clickOnArchiveThisList();
        BoardPageSandra.assertListArchiving("List 2");

        // Archiving the second list
        BoardPageSandra.clickOnListThreeDotMenu(1);
        BoardPageSandra.clickOnArchiveThisList();
        BoardPageSandra.assertListArchiving("List 1");
    });

});