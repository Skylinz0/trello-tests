class BoardPageErlend {
    constructor() {
        this.visibilityButton = '#permission-level'
        this.visibilityPrivate= ':nth-child(1) > .js-select'
        this.visibilityWorkspace= ':nth-child(2) > .js-select'
        this.sidebarButton='.show-sidebar-button-react-root'
        this.bgColorButton='.mod-background'
        this.bgColorsTile='.board-backgrounds-colors-tile'
        this.bgColor=':nth-child(7) > .image'
        this.closeSidebarMenu='.board-menu-header-close-button'
        this.firstListHeaderExtras=':nth-child(1) > .list > .list-header > .list-header-extras > .list-header-extras-menu'
        this.setLimit='.js-set-list-limit'
        this.setLimitField='.set-list-limit'
        this.setLimitSaveBtn='.set-list-limit-buttons > .nch-button--primary'
        this.limitListBadge='.list-header-extras-limit-badge'
        this.addCardButton='.js-add-a-card'
        this.cardTextArea='.list-card-composer-textarea'
        this.cardSaveButton='.js-add-card'


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

    setListLimit() {
        cy.get(this.firstListHeaderExtras).click();
        cy.get(this.setLimit).click(); 
        cy.get(this.setLimitField).type('2'); 
        cy.get(this.setLimitSaveBtn).click();
        cy.get(this.limitListBadge).should('be.visible');
        cy.log('List limit badge is visible');
    }

    addCards() {
        cy.get(this.addCardButton).eq(0).click();
        cy.get(this.cardTextArea).type('Hello world1');
        cy.get(this.cardSaveButton).click();
        cy.get(this.cardTextArea).type('Hello world2');
        cy.get(this.cardSaveButton).click();
        cy.get(this.cardTextArea).type('Hello world3');
        cy.get(this.cardSaveButton).click();
    }
    checkBackgroundColorListLimitExeeded() {
        cy.get(".list.exceeds-list-limit").should("have.css", "background-color", "rgb(250, 243, 192)");
    }

    removeListLimit() {
        cy.get(this.firstListHeaderExtras).click();
        cy.get(this.setLimit).click(); 
        cy.get(this.setLimitField).type('{backspace}'); 
        cy.get(this.setLimitSaveBtn).click();
        cy.get(this.limitListBadge).should('not.be.visible');
        cy.log('List limit badge is not visible');
    }

}

export default new BoardPageErlend()