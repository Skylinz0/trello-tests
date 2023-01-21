class BoardPageMarily {
    constructor() {
        this.menuBar = '[data-testid="workspace-navigation-expanded-container"]';
        this.collapsebutton = '[data-testid="workspace-navigation-collapse-button"]';
        this.workSpace = '[data-testid="current-workspace-expanded"]';
        this.expandButton = '[data-testid="workspace-navigation-expand-button"]';

    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }

    hidemenuBar() {
        cy.get(this.menuBar).should('be.visible');
        cy.get(this.collapsebutton).click();          
        cy.get(this.workSpace).should('not.be.visible');
    }

    showmenuBar() {
        cy.get(this.expandButton).click();
        cy.get(this.menuBar).should('be.visible');
    }
}

export default new BoardPageMarily()