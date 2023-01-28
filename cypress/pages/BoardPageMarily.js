class BoardPageMarily {
    constructor() {
        this.menuBar = '[data-testid="workspace-navigation-expanded-container"]';
        this.collapseButton = '[data-testid="workspace-navigation-collapse-button"]';
        this.workSpace = '[data-testid="current-workspace-expanded"]';
        this.expandButton = '[data-testid="workspace-navigation-expand-button"]';
        this.emptyArea = '.placeholder';
        this.emptyLine = '.list-name-input';
        this.saveEdit = '.js-save-edit';
        this.columnArea = '.js-editing-target';
        this.headLine = '.list-header-target';
        this.createButton = '.js-submit';
        this.threeDots = '.list-header-extras-menu';
        this.selectCopy = '.js-copy-list';
        this.textArea = 'textarea.js-autofocus';
        this.contentField = '.js-list-content';
        this.selectArchive = '.js-close-list';


    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }

    hidemenuBar() {
        cy.get(this.menuBar).should('be.visible');
        cy.get(this.collapseButton).click();          
        cy.get(this.workSpace).should('not.be.visible');
    }

    showmenuBar() {
        cy.get(this.expandButton).click();
        cy.get(this.menuBar).should('be.visible');
    }

    selectcolumRow() {
        //Creates new column
        cy.get(this.emptyArea).click();
        cy.get(this.emptyLine).type('TestList123');
        cy.get(this.saveEdit).click();
        //Edits created column
        cy.get(this.columnArea).should('be.visible');
        cy.get(this.headLine).type('List{enter}');
        cy.get(this.columnArea).should('be.visible');  
    }

    copyColumn() {
        //Creates new column
        cy.get(this.emptyArea).click();
        cy.get(this.emptyLine).type('CopyList');
        cy.get(this.saveEdit).click();
        //Copying column
        cy.get(this.threeDots).first().click();
        cy.get(this.selectCopy).click();
        cy.get(this.textArea).type('NewList');
        cy.get(this.createButton).click();
        cy.get(this.contentField).should('be.visible');  

    }

    archiveColumn() {
        //Creates new column
        cy.get(this.emptyArea).click();
        cy.get(this.emptyLine).type('ListIsArchived');
        cy.get(this.saveEdit).click();
        //Archiving the column
        cy.get(this.threeDots).first().click();
        cy.get(this.selectArchive).click();
        cy.contains('ListIsArchived').should('not.be.visible'); 

    } 




}

export default new BoardPageMarily()