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
        //this.firstListHeaderExtras=':nth-child(1) > .list > .list-header > .list-header-extras > .list-header-extras-menu'
        this.ListHeaderExtras='.list-header-extras-menu'
        this.setLimit='.js-set-list-limit'
        this.setLimitField='.set-list-limit'
        this.setLimitSaveBtn='.set-list-limit-buttons > .nch-button--primary'
        this.limitListBadge='.list-header-extras-limit-badge'
        this.addCardButton='.js-add-a-card'
        this.cardTitle='.list-card-title'
        this.cardTextArea='.list-card-composer-textarea'
        this.cardSaveButton='.js-add-card'
        this.cardDetails='.list-card-details'
        this.cardDescriptionTextArea='[data-testid="click-wrapper"]' //'.description-content'
        this.cardDescriptionTextField= '.description-content' //'.card-description'
        this.cardDescriptionSaveButton='.mod-submit-edit'
        this.cardDialogCloseButton='.dialog-close-button'
        this.cardCommentTextArea='.comment-box-input'
        this.cardCommentSaveButton='.js-add-comment'
        this.cardCommentEditButton='.js-edit-action'
        this.cardCommentEditTextArea='.mod-editing-comment'
        this.cardCommentEditSaveButton='.js-save-edit' //js-save-edit
        this.cardCommentDeleteButton='.js-confirm-delete-action'
        this.cardCommentDeleteConfirmation='.js-confirm'
        this.cardMembersButton='.js-change-card-members'
        this.cardMembersName='.name'
        this.cardOperations='.list-card-operation'
        this.moveCardButton='.js-move-card'
        this.sortableList = '.ui-sortable'
        this.selectList='.js-select-list'
        this.copyCard='.js-copy-card'
        this.archiveCardsFromList='.js-archive-cards'
        this.archiveCardsFromListDeleteButton='.js-confirm'
        this.convertCardToTemplate='.js-convert-to-template'
        this.createTemplateFromCardButton='[data-testid="card-template-list-button"]'
        this.createTemplateFromCardButtonConfirm='[data-testid="create-card-from-template-button"]'
        


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

    setListLimit(list, limit) {
        //cy.get(this.firstListHeaderExtras).click();
        cy.get(this.ListHeaderExtras).eq(list).click();
        cy.get(this.setLimit).click(); 
        cy.get(this.setLimitField).type(limit); 
        cy.get(this.setLimitSaveBtn).click();
        cy.get(this.limitListBadge).should('be.visible');
        cy.log('List limit badge is visible');
    }

    addCard(list,title) {
        cy.get(this.addCardButton).eq(list).click();
        cy.get(this.cardTextArea).type(title);
        cy.get(this.cardSaveButton).click();
        cy.get(this.cardTextArea).type('{esc}');
    }

    checkBackgroundColorListLimitExeeded() {
        cy.get(".list.exceeds-list-limit").should("have.css", "background-color", "rgb(250, 243, 192)");
    }

    removeListLimit(list) {
        cy.get(this.ListHeaderExtras).eq(list).click();
        cy.get(this.setLimit).click(); 
        cy.get(this.setLimitField).type('{backspace}'); 
        cy.get(this.setLimitSaveBtn).click();
        cy.get(this.limitListBadge).should('not.be.visible');
        cy.log('List limit badge is not visible');
    }

    addDescriptionToCard(description) {
        cy.get(this.cardTitle).click();
        cy.get(this.cardDescriptionTextArea).click();
        cy.get(this.cardDescriptionTextArea).type(description);
        cy.get(this.cardDescriptionSaveButton).click();
        cy.get(this.cardDialogCloseButton).click();
    }

    removeDescriptionToCard() {
        cy.get(this.cardTitle).click();
        cy.get(this.cardDescriptionTextField).click();
        cy.get(this.cardDescriptionTextArea).type('{backspace}');
        cy.get(this.cardDescriptionSaveButton).click();
        cy.get(this.cardDialogCloseButton).click();
    }

    addCommentToCard() {
        cy.get(this.cardTitle).click();
        cy.get(this.cardCommentTextArea).click().type('This is a comment');
        cy.get(this.cardCommentSaveButton).click()
        cy.get(this.cardDialogCloseButton).click();
    }

    editComment() {
        cy.get(this.cardTitle).click();
        cy.get(this.cardCommentEditButton).click();
        cy.get(this.cardCommentTextArea).eq(1).type('This is an edited comment');
        cy.get(this.cardCommentEditSaveButton).eq(2).click();
        cy.get(this.cardDialogCloseButton).click();
    }

    removeCommentFromCard() {
        cy.get(this.cardTitle).click();
        cy.get(this.cardCommentDeleteButton).click()
        cy.get(this.cardCommentDeleteConfirmation).click()
        cy.get(this.cardDialogCloseButton).click();
    }

    archiveAllCardsFromList(list) {
        cy.get(this.ListHeaderExtras).eq(list).click();
        cy.get(this.archiveCardsFromList).click()
        cy.get(this.archiveCardsFromListDeleteButton).click();
    }

    /*
    addMemberToCard() {
        cy.get(this.addCardButton).eq(0).click();
        cy.get(this.cardTextArea).type('New card');
        cy.get(this.cardSaveButton).click();
        cy.get(this.cardTitle).next().should('contain', 'New card').click();
        //cy.get(this.cardDetails).eq(3).click();
        cy.get(this.cardMembersButton).click();
        cy.get(this.cardMembersName).click();
        cy.log('Member added to card');
        cy.get(this.cardMembersName).click();
        cy.log('Member removed from card');
        
    }
    */

    testMoveCopyButtons(title) {
        //move card to List2
        cy.get(this.cardOperations).click()
        cy.get(this.moveCardButton).click()
        cy.get(this.selectList).select(1)
        cy.get('input[type=submit].wide').eq(0).click();
        //move card back to List1
        cy.get(this.cardOperations).click()
        cy.get(this.moveCardButton).click()
        cy.get(this.selectList).select(0)
        cy.get('input[type=submit].wide').eq(0).click();
        //copy card to List2
        cy.get(this.cardOperations).click()
        cy.get(this.copyCard).click()
        cy.get(this.selectList).select(1)
        cy.get('input[type=submit].wide').eq(0).click();
    }

    createTemplateFromCard(list) {
        cy.get(this.cardDetails).eq(0).click();
        cy.get(this.convertCardToTemplate).click();
        cy.get(this.cardDialogCloseButton).click();
    }

    createCardFromTemplate(title) {
        cy.get(this.createTemplateFromCardButton).eq(0).click();
        cy.get('.js-react-root>div').
        contains("a", title).click();
        cy.get(this.createTemplateFromCardButtonConfirm).click();
    }

}

export default new BoardPageErlend()