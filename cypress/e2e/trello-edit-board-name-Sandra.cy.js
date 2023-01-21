import BoardPageSandra from "../pages/BoardPageSandra";
import BoardsSandra from "../pages/BoardsSandra";
import LoginPageSandra from "../pages/LoginPageSandra";
import { faker } from '@faker-js/faker'

describe('Testing editing Trello board name', () => {

    const myTestingBoard = 'Testing Board - Sandra';
    const myTestingBoardNewName = {
        newName: faker.lorem.words()
    }

    beforeEach(() => {
        LoginPageSandra.openTrelloLoginPage();
        LoginPageSandra.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        BoardsSandra.boardsViewShouldBeVisible();
        BoardsSandra.openBoardByName(myTestingBoard);
    });

    it('Select certain Trello board name, edit it and change it back', () => {
        BoardPageSandra.clickOnBoardName(myTestingBoard);
        BoardPageSandra.typeNewBoardName(myTestingBoardNewName);
        BoardPageSandra.changeBoardNameBack(myTestingBoard);
    });

});