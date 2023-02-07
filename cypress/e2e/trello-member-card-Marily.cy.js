import BoardPageMarily from "../pages/BoardPageMarily";
import BoardsMarily from "../pages/BoardsMarily";
import LoginPageMarily from "../pages/LoginPageMarily";

describe('Testing add/remove member function', () => {   
    const myKanbanBoard = 'Trello - Marily Testing Board';
    const myKanbanBoardUrl = 'https://trello.com/b/JUF1PpZe/trello-marily-testing-board';

    beforeEach(() => {
        LoginPageMarily.openTrelloLoginPage();        
        LoginPageMarily.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsMarily.boardsViewShouldBeVisible();
        BoardsMarily.openBoardByName(myKanbanBoard);
    });   

    it('Add and remove member from card', () => {
        BoardPageMarily.newList("NewCase000");
        BoardPageMarily.createCard("TestCard");
        BoardPageMarily.addMember("TestCard");
        BoardPageMarily.removeMember("TestCard");           
       
    });
});