class BoardPageSandra {
    constructor() {
        this.boardNameField = 'h1.js-board-editing-target'
        this.unstarredIcon = '.board-header-star-container .icon-star'
        this.starredIcon = '.board-header-star-container .icon-starred'
        this.threeDotMenu = '.list .list-header-extras-menu'
        this.moveListOption = '.pop-over-list .js-move-list'
        this.listPosition = '.form-grid-child-full .js-select-list-pos'
        this.moveButton = '.js-commit-position'
        this.listName = 'h2.js-list-name-assist'
        this.addAnotherList = '.placeholder'
        this.enterListTitle = 'input[placeholder="Enter list title…"]'
        this.addListButton = 'input.js-save-edit'
        this.listName = 'textarea.js-list-name-input'
        this.addCardButton = '.list .card-composer-container'
        this.cardTitle = 'textarea[placeholder="Enter a title for this card…"]'
        this.cardNameField = '.js-react-root'
        this.sortByOption = '.pop-over-list .js-sort-cards'
        this.sortListAlphabeticallyOption = '.pop-over-list .js-sort-by-card-name'
        this.sortableList = '.ui-sortable'
        this.sortListByNewestFirstOption = '.pop-over-list .js-sort-newest-first'
        this.sortListByOldestFirstOption = '.pop-over-list .js-sort-oldest-first'
    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }

    clickOnBoardName(name) {
        cy.get('h1').contains(name).click()
    }

    typeNewBoardName(name) {
        cy.get(this.boardNameField).next().type(name + '{enter}');
        cy.get(this.boardNameField).should('contain', name);
    }

    changeBoardNameBack(name) {
        cy.get(this.boardNameField).click();
        cy.get(this.boardNameField).next().type(name + '{enter}');
        cy.get(this.boardNameField).should('contain', name);
    }

    findStarIcon() {
        cy.get(this.unstarredIcon).should('be.visible').and('have.css', 'color', 'rgb(255, 255, 255)');
    }
    
    clickOnUnstarredIcon() {
        cy.get(this.unstarredIcon).click();
        cy.get(this.starredIcon).should('be.visible').and('have.css', 'color', 'rgb(242, 214, 0)');
    }

    clickOnStarredIcon() {
        cy.get(this.starredIcon).click();
        cy.get(this.unstarredIcon).should('be.visible').and('have.css', 'color', 'rgb(255, 255, 255)');
    }

    clickOnFirstListThreeDotMenu() {
        cy.get(this.threeDotMenu).eq(0).click();
    }

    clickOnMoveListOption() {
        cy.get(this.moveListOption).click();
    }

    selectNextListPositionAndAssert() {
        cy.get(this.listPosition).select('2');
        cy.get(this.listPosition).should('contain', '2');
    }

    clickOnMoveButton() {
        cy.get(this.moveButton).eq(0).click();
    }

    assertListName() {
        cy.get(this.listName).should('contain', 'To Do');
    }

    clickOnSecondListThreeDotMenu() {
        cy.get(this.threeDotMenu).eq(1).click();
    }

    selectInitialListPositionAndAssert() {
        cy.get(this.listPosition).select('1');
        cy.get(this.listPosition).should('contain', '1');
    }

    clickOnAddAnotherListField() {
        cy.get(this.addAnotherList).click();
    }

    typeListName() {
        cy.get(this.enterListTitle).type('Sorting list');
    }

    clickOnAddListButtonAndAssert() {
        cy.get(this.addListButton).click();
        cy.get(this.listName).should('contain', 'Sorting list');
    }

    clickOnAddCardInFourthList() {
        cy.get(this.addCardButton).eq(3).click();
    }

    typeCardNameWithA() {
        cy.get(this.cardTitle).type('A team' + '{enter}');
    }

    assertCardNameWithA() {
        cy.get(this.cardNameField).next().should('contain', 'A team');
    }

    typeCardNameWithXAndAssert() {
        cy.get(this.cardTitle).type('X team' + '{enter}');
        cy.get(this.cardNameField).next().should('contain', 'X team');
    }

    typeCardNameWithB() {
        cy.get(this.cardTitle).type('B team' + '{enter}');
    }

    assertCardNameWithB() {
        cy.get(this.cardNameField).next().should('contain', 'B team');
    }

    clickOnFourthListThreeDotMenu() {
        cy.get(this.threeDotMenu).eq(3).click();
    }

    clickOnSortByOption() {
        cy.get(this.sortByOption).click();
    }

    clickOnSortListAlphabeticallyOption() {
        cy.get(this.sortListAlphabeticallyOption).click();
    }

    assertAIsFirstAndXIsLast() {
        cy.get(this.sortableList).first().should('contain', 'A team');
        cy.get(this.sortableList).last().should('contain', 'X team');
    }

    clickOnSortListByNewestFirstOption() {
        cy.get(this.sortListByNewestFirstOption).click();
    }

    clickOnSortListByOldestFirstOption() {
        cy.get(this.sortListByOldestFirstOption).click();
    }

}

export default new BoardPageSandra()