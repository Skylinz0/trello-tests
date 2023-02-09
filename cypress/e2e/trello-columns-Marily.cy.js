import BoardPageMarily from "../pages/BoardPageMarily";
import BoardsMarily from "../pages/BoardsMarily";
import LoginPageMarily from "../pages/LoginPageMarily";
import { faker } from '@faker-js/faker';

describe('Testing columns', () => {   
    const myKanbanBoard = 'Trello - Marily Testing Board';
    const myKanbanBoardUrl = 'https://trello.com/b/JUF1PpZe/trello-marily-testing-board';

    beforeEach(() => {
        LoginPageMarily.openTrelloLoginPage();        
        LoginPageMarily.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsMarily.boardsViewShouldBeVisible();
        BoardsMarily.openBoardByName(myKanbanBoard);
    });   

    it('Create/Rename column list', () => {
        let list = faker.lorem.word();


       BoardPageMarily.selectcolumRow(list, "New2");
       BoardPageMarily.archiveColumn("New2");       

    });

    it('Create/Copy list', () => {
        let list = faker.lorem.word();
        let copy = faker.lorem.word();
        BoardPageMarily.copyColumn(list,copy);
        BoardPageMarily.archiveColumn(list);       
        BoardPageMarily.archiveColumn(copy);       

    });

    it.skip('Create/Archive list', () => {
        let list = faker.lorem.word();        
        BoardPageMarily.archiveColumn(list);       
    });
});
