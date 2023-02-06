import BoardPageMarily from "../pages/BoardPageMarily";
import BoardsMarily from "../pages/BoardsMarily";
import LoginPageMarily from "../pages/LoginPageMarily";

describe('Testing template functions', () => {
    const myKanbanBoard = 'Trello - Marily Testing Board';
    const myKanbanBoardUrl = 'https://trello.com/b/JUF1PpZe/trello-marily-testing-board';

    beforeEach(() => {
        LoginPageMarily.openTrelloLoginPage();
        LoginPageMarily.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsMarily.boardsViewShouldBeVisible();
        BoardsMarily.openBoardByName(myKanbanBoard);
    });

    it('Add card as a template and check other actions', () => {
        BoardPageMarily.newList("NewCase000");
        BoardPageMarily.createCard("TestCard");
        BoardPageMarily.addTemplate("TestCard");
        BoardPageMarily.createcardTemplate("TestCard", "Template001");
        BoardPageMarily.selecteditTemplate("TestCard", "NewCardTemplate");
        BoardPageMarily.deletecreatedTemplate("NewCardTemplate");       

    });

   
});
