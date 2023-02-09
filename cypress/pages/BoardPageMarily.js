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
        this.headLine = '.js-list-name-input';
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
        this.exitButton = '.js-close-window';
        this.newtemplateTitle = '.mod-card-back-title';
        this.cardDelete = '.js-delete-card';
        this.confirmButton = 'input.js-confirm';
        this.archiveButton = '.js-archive';
        this.cardmemberField = '.js-change-card-members';
        this.cardMember = '.js-select-member';
        this.closeIcon = '.icon-md';
        this.memberonCard = '.js-member-on-card-menu';
        this.memberBadge = '.js-list-draggable-card-members';
        this.removingMember = '[data-testid="remove-from-card"]';
    


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
        cy.get(this.nameCard).invoke('val', testCard);
        cy.get(this.cardButton).click();
    }

    editCard(cardName,newName) {
        cy.contains(cardName).trigger('mouseover');
        cy.get(this.cardMenu).click({ force: true});
        cy.get(this.cardTitle).invoke('val', newName)
        cy.get(this.cardEdits).click();
        cy.get(this.newcardName).should('be.visible');    
    }

    copyCard(nameCard,nameCard1) {
        cy.contains(nameCard).trigger('mouseover');
        cy.get(this.cardMenu).click({ force: true});
        cy.get(this.copycardButton).click();        
        //Chaning copyed card name 
        cy.get(this.textArea).invoke('val', nameCard1);
        cy.get(this.copySubmitButton).click();
        cy.contains(nameCard1).should('be.visible');  
    }

    archiveCard(nameCard1) {
        cy.contains(nameCard1).trigger('mouseover');
        cy.get(this.cardMenu).eq(0).click({ force: true });
        cy.get(this.archiveButton).click();
        cy.contains(nameCard1).should('not.be.visible');
        
    }
 
    addTemplate(testCard) {
        cy.contains(testCard).click();
        cy.get(this.templateButton).click();
        cy.get(this.templateBadge).should('be.visible');  
    }

    selectcolumRow(testList,newColumn) {
        //Creates new column
        cy.get(this.emptyArea).click();
        cy.get(this.emptyLine).type(testList);
        cy.get(this.saveEdit).click();
        //Edits created column
        cy.get(this.columnArea).should('be.visible');
        cy.contains(testList).click({ force: true });
        cy.get(this.headLine).type(newColumn + '{enter}');
        cy.get(this.columnArea).should('be.visible');  
    }

    copyColumn(copyList,newList) {
        //Creates new column
        cy.get(this.emptyArea).click();
        cy.get(this.emptyLine).type(copyList);
        cy.get(this.saveEdit).click();
        //Copying column        
        cy.get(this.threeDots).last().click();
        cy.get(this.selectCopy).click();
        cy.get(this.textArea).type(newList);
        cy.get(this.createButton).click();
        cy.get(this.contentField).should('be.visible');  

    }

    archiveColumn(listArchived) {
        //Creates new column
        //cy.get(this.emptyArea).click();
        //cy.get(this.emptyLine).type(listArchived);
        //cy.get(this.saveEdit).click();
        //Archiving the column
        cy.get(this.threeDots).first().click();
        cy.get(this.selectArchive).click();
        cy.contains(listArchived).should('not.be.visible'); 

    } 

    createcardTemplate(testCard,testTemplate) {
        cy.contains(testCard).click({force: true});
        cy.get(this.bannertemplateButton).click();
        cy.get(this.newtextField).type(testTemplate);
        cy.get(this.fromButton).click();
        cy.get(this.exitButton).click();             

    }

    selecteditTemplate(testCard) {
        cy.contains(testCard).eq(0).click({ force: true });
        cy.get(this.newtemplateTitle).click({force: true});
        cy.get(this.newtemplateTitle).clear();
        cy.get(this.newtemplateTitle).type(cardnewTemplate + '{enter}');    

    }

    deletecreatedTemplate(newTemplate) {
        cy.contains(newTemplate).eq(0).click({ force: true });
        cy.get(this.cardDelete).click({force: true});
        cy.get(this.confirmButton).click();
        cy.contains(newTemplate).should('not.exist');

    }

    addMember(testCard) {
        cy.contains(testCard).click({force: true});
        cy.get(this.cardmemberField).click({force: true});
        cy.get(this.cardMember).click();
        cy.get(this.closeIcon).click();
        cy.get(this.memberonCard).should('be.visible');

    }

    removeMember(testCard) {
        cy.contains(testCard).trigger('mouseover');
        cy.get(this.memberBadge).click();
        cy.get(this.removingMember).click();        
        cy.get(this.memberonCard).should('not.exist');

    }






}

export default new BoardPageMarily()