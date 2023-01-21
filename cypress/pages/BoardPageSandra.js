class BoardPageSandra {
    constructor() {
        this.boardNameField = 'h1.js-board-editing-target'
        this.unstarredIcon = '.board-header-star-container .icon-star'
        this.starredIcon = '.board-header-star-container .icon-starred'
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

}

export default new BoardPageSandra()