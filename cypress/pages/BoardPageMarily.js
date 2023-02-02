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
        this.addCard = '.js-add-a-card';
        this.nameCard = 'textarea.js-card-title';
        this.cardButton = '.js-add-card';
        this.templateButton = '.js-convert-to-template';
        this.templateBadge = '.badge-text';
        this.bannertemplateButton = '[data-testid="create-card-from-template-banner-button"]';
        this.newtextField = '[data-testid="card-title-textarea"]';
        this.fromButton  = '[data-testid="create-card-from-template-button"]';
        this.cardMenu = '.js-card-menu';
        this.cardTitle = '.js-edit-card-title';
        this.cardEdits = '.js-save-edits';
        this.newcardName = '.js-card-name';
        this.copycardButton = '.js-copy-card';
        this.copySubmitButton = '.js-submit';


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

    newList(newCase) {
        cy.get(this.emptyArea).click();
        cy.get(this.emptyLine).type(newCase);
        cy.get(this.saveEdit).click();       

    }
    createCard(testCard) {
        cy.get(this.addCard).click();
        cy.get(this.nameCard).type(testCard);
        cy.get(this.cardButton).click();
    }

    editCard(cardName,newName) {
        cy.contains(cardName).trigger('mouseover');
        cy.get(this.cardMenu).click({ force: true});
        cy.get(this.cardTitle).type(newName);
        cy.get(this.cardEdits).click();
        cy.get(this.newcardName).should('be.visible');    
    }

    copyCard(nameCard,nameCard1) {
        cy.contains(nameCard).trigger('mouseover');
        cy.get(this.cardMenu).click({ force: true});
        cy.get(this.copycardButton).click();        
        //Chaning copyed card name 
        cy.get(this.textArea).type(nameCard1);
        cy.get(this.copySubmitButton).click();
        cy.contains(nameCard1).should('be.visible');  
    }

    archiveCard(nameCard1) {
        cy.contains(nameCard1).trigger('mouseover');
        cy.get(this.cardMenu).eq(0).click({ force: true });
        cy.get('.js-archive').click();
        cy.contains(nameCard1).should('not.be.visible');
        
    }
 
    addTemplate(testCard) {
        cy.contains(testCard).click();
        cy.get(this.templateButton).click();
        cy.get(this.templateBadge).should('be.visible');  
    }

    selectcolumRow(testList) {
        //Creates new column
        cy.get(this.emptyArea).click();
        cy.get(this.emptyLine).type(testList);
        cy.get(this.saveEdit).click();
        //Edits created column
        cy.get(this.columnArea).should('be.visible');
        cy.get(this.headLine).type('NewColumn{enter}');
        cy.get(this.columnArea).should('be.visible');  
    }

    copyColumn(copyList,newList) {
        //Creates new column
        cy.get(this.emptyArea).click();
        cy.get(this.emptyLine).type(copyList);
        cy.get(this.saveEdit).click();
        //Copying column
        cy.get(this.threeDots).first().click();
        cy.get(this.selectCopy).click();
        cy.get(this.textArea).type(newList);
        cy.get(this.createButton).click();
        cy.get(this.contentField).should('be.visible');  

    }

    archiveColumn(listArchived) {
        //Creates new column
        cy.get(this.emptyArea).click();
        cy.get(this.emptyLine).type(listArchived);
        cy.get(this.saveEdit).click();
        //Archiving the column
        cy.get(this.threeDots).first().click();
        cy.get(this.selectArchive).click();
        cy.contains(listArchived).should('not.be.visible'); 

    } 

    createcardTemplate(testCard,testTemplate) {
        cy.contains(testCard).click();
        cy.get(this.bannertemplateButton).click();
        cy.get(this.newtextField).type(testTemplate);
        cy.get(this.fromButton).click();
        cy.contains(testTemplate).should('be.visible');        

    }






}

export default new BoardPageMarily()