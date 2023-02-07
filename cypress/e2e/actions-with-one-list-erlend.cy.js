import BoardPage from "../pages/BoardPage";
import BoardPageErlend from "../pages/BoardPageErlend";
import BoardsErlend from "../pages/BoardsErlend";
import LoginPage from "../pages/LoginPage";

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


    //WEEK2

    it('Set and remove list limit', () => {
        BoardPageErlend.setListLimit(List1,Limit2);
        BoardPageErlend.addCard(List1, 'Hello world1')
        BoardPageErlend.addCard(List1, 'Hello world2')
        BoardPageErlend.addCard(List1, 'Hello world3')
        BoardPageErlend.checkBackgroundColorListLimitExeeded();
        BoardPageErlend.removeListLimit(List1);
        BoardPageErlend.archiveAllCardsFromList(List1);
    });

    
    
});