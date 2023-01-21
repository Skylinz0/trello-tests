class BoardPageErlend {
    constructor() {
        this.visibilityButton = '#permission-level';
        this.visibilityPrivate= ':nth-child(1) > .js-select'
        this.visibilityWorkspace= ':nth-child(2) > .js-select'
        this.sidebarButton='.show-sidebar-button-react-root'
        this.bgColorButton='.mod-background'
        this.bgColorsTile='.board-backgrounds-colors-tile'
        this.bgColor=':nth-child(7) > .image'
        this.closeSidebarMenu='.board-menu-header-close-button'


    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }

    visibilityChange() {
        cy.get(this.visibilityButton).click();
        cy.get(this.visibilityPrivate).click();
        cy.get(this.visibilityButton).click();
        cy.get(this.visibilityWorkspace).click();
    }

    changeBackgroundColor() {
        cy.get(this.sidebarButton).click();
        cy.get(this.bgColorButton).click();
        cy.get(this.bgColorsTile).click();
        cy.get(this.bgColor).click();
        cy.get(this.closeSidebarMenu).click();
    }

    checkBackgroundColor() {
        cy.get("#trello-root").should("have.css", "background-color", "rgb(75, 191, 107)");
    }
}

export default new BoardPageErlend()