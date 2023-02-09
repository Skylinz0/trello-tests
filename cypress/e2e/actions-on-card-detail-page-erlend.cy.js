import BoardPage from "../pages/BoardPage";
import BoardPageErlend from "../pages/BoardPageErlend";
import BoardsErlend from "../pages/BoardsErlend";
import LoginPage from "../pages/LoginPage";
import '@4tw/cypress-drag-drop';

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Testing Board - Erlend';
    const myKanbanBoardUrl = 'https://trello.com/b/vYnBchTo/testing-board-erlend';
    const List1='0';
    const List2='1';
    const List3='2';
    const Limit2='2'
    



    beforeEach(() => {
        LoginPage.openTrelloLoginPage();

        //this information is kept in file cypress.congig.js, block 'env'
        LoginPage.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsErlend.boardsViewShouldBeVisible();
        BoardsErlend.openBoardByName(myKanbanBoard);
    });

    //WEEK3 


    it('Add and remove description', () => {
        BoardPageErlend.addCard(List1, 'Testing-testing' );
        BoardPageErlend.addDescriptionToCard('This is a description');
        BoardPageErlend.removeDescriptionToCard();
        BoardPageErlend.archiveAllCardsFromList(List1);
    });

    it('Add, edit and remove comment', () => {
        BoardPageErlend.addCard(List1, 'Testing-testing' );
        BoardPageErlend.addCommentToCard('This is a comment');
        BoardPageErlend.editComment('This is an edited comment');
        BoardPageErlend.removeCommentFromCard();
        BoardPageErlend.archiveAllCardsFromList(List1);
    });

    it('Test move and copy buttons functionality', () => {
        BoardPageErlend.addCard(List1, 'Testing-testing' );
        BoardPageErlend.testMoveCopyButtons('Testing-testing');
        BoardPageErlend.archiveAllCardsFromList(List1);
        BoardPageErlend.archiveAllCardsFromList(List2);
    });

    it('Create template from a card and create a card from the template', () => {
        BoardPageErlend.addCard(List1, 'Testing-testing');
        BoardPageErlend.createTemplateFromCard();
        BoardPageErlend.createCardFromTemplate('Testing-testing');
        BoardPageErlend.archiveAllCardsFromList(List1);
    });

    it.only('Drag and drop card to another list (column)', () => {
        BoardPageErlend.addCard(List3, 'Test1');
        BoardPageErlend.dragAndDropCard('Test1')
        BoardPageErlend.archiveAllCardsFromList(List1);
    });
    
});