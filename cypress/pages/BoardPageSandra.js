class BoardPageSandra {
    constructor() {
        this.boardNameField = 'h1.js-board-editing-target'
        this.unstarredIcon = '.board-header-star-container .icon-star'
        this.starredIcon = '.board-header-star-container .icon-starred'
        this.threeDotMenu = '.list .list-header-extras-menu'
        this.moveListOption = '.pop-over-list .js-move-list'
        this.listPosition = '.form-grid-child-full .js-select-list-pos'
        this.moveListButton = '.js-commit-position'
        this.listName = 'h2.js-list-name-assist'
        this.addAnotherList = '.placeholder'
        this.enterListTitle = 'input[placeholder="Enter list title…"]'
        this.addListButton = 'input.js-save-edit'
        this.listName = 'textarea.js-list-name-input'
        this.addCardButton = '.list .card-composer-container'
        this.openCardComposer = '.list .open-card-composer'
        this.cardTitle = 'textarea[placeholder="Enter a title for this card…"]'
        this.cardNameField = '.js-react-root'
        this.sortByOption = '.pop-over-list .js-sort-cards'
        this.sortListAlphabeticallyOption = '.pop-over-list .js-sort-by-card-name'
        this.sortableList = '.ui-sortable'
        this.sortListByNewestFirstOption = '.pop-over-list .js-sort-newest-first'
        this.sortListByOldestFirstOption = '.pop-over-list .js-sort-oldest-first'
        this.boardHeader = '.js-board-header'
        this.archiveThisList = '.pop-over-list .js-close-list'
        this.cardDetails = '.list .ui-sortable'
        this.labelDetails = '.js-edit-labels'
        this.purpleLabel = '[data-color="purple"]'
        this.closeLabelsButton = '[data-testid="popover-close"]'
        this.cardLabel = '[data-testid="card-label"]'
        this.labelSearchField = '[placeholder="Search labels…"]'
        this.labelSearchResult = '.js-labels-list-item'
        this.moveOption = '.u-clearfix .js-move-card'
        this.listMenu = '.js-select-list'
        this.moveCardButton = '.js-submit'
        this.closingIcon = '.icon-md'
        this.watchOption = '.pop-over-list .js-list-subscribe'
        this.closeListIcon = '.pop-over-header-close-btn.icon-sm.icon-close'
        this.watchIcon = '.icon-sm.icon-subscribe.mod-quiet'
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

    clickOnListThreeDotMenu(number) {
        cy.get(this.threeDotMenu).eq(number-1).click();
    }

    clickOnMoveListOption() {
        cy.get(this.moveListOption).click();
    }

    selectListPositionAndAssert(number) {
        cy.get(this.listPosition).select(number);
        cy.get(this.listPosition).should('contain', number);
    }

    clickOnMoveListButton(number) {
        cy.get(this.moveListButton).eq(number).click();
    }

    clickOnMoveCardButton() {
        cy.get(this.moveCardButton).click();
    }

    assertListName(listName) {
        cy.get(this.listName).should('contain', listName);
    }

    clickOnAddAnotherListField() {
        cy.get(this.addAnotherList).click();
    }

    typeListName(listTitle) {
        cy.get(this.enterListTitle).type(listTitle);
    }

    clickOnAddListButton() {
        cy.get(this.addListButton).click();
    }

    assertListName(listTitle) {
        cy.get(this.listName).should('contain', listTitle);
        cy.get(this.boardHeader).click();
    }

    clickOnAddCardInList(number) {
        cy.get(this.addCardButton).eq(number-1).click();
    }

    clickOnAddCardAgainInList(number) {
        cy.get(this.openCardComposer).eq(number-1).click({force: true});
    }

    typeCardName(cardName) {
        cy.get(this.cardTitle).type(cardName + '{enter}');
    }

    assertCardName(cardName) {
        cy.get(this.cardNameField).next().should('contain', cardName);
    }

    clickOnSortByOption() {
        cy.get(this.sortByOption).click();
    }

    clickOnSortListAlphabeticallyOption() {
        cy.get(this.sortListAlphabeticallyOption).click();
    }

    assertFirstCard(cardName) {
        cy.get(this.sortableList).first().should('contain', cardName);
    }

    assertLastCard(cardName) {
        cy.get(this.sortableList).last().should('contain', cardName);
    }

    clickOnSortListByNewestFirstOption() {
        cy.get(this.sortListByNewestFirstOption).click();
    }

    clickOnSortListByOldestFirstOption() {
        cy.get(this.sortListByOldestFirstOption).click();
    }

    clickOnArchiveThisList() {
        cy.get(this.archiveThisList).click();
    }            

    assertListArchiving(listName) {
        cy.contains(listName).should('not.be.visible');
    }

    openCardDetailsInList(number) {
        cy.get(this.cardDetails).eq(number-1).type('{enter}');
    }

    openLabelDetails() {
        cy.get(this.labelDetails).click();
    }
    
    addPurpleLabel() {
        cy.get(this.purpleLabel).click();
    }
   
    closeLabelDetails() {
        cy.get(this.closeLabelsButton).click();
    }

    assertPurpleLabelVisible() {
        cy.get(this.purpleLabel).should('be.visible');
    }
    
    openCardLabel() {
        cy.get(this.cardLabel).click();
    }
    
    searchForLabel(color) {
        cy.get(this.labelSearchField).type('{enter}' + color);
    }
    
    clickOnLabel() {
        cy.get(this.labelSearchResult).click();
    }

    assertPurpleLabelNotVisible() {
        cy.get(this.purpleLabel).should('not.exist');
    }
      
    clickOnMoveItemInList(number) {
        cy.get(this.moveOption).eq(number-1).click();
    }

    selectList(listName) {
        cy.get(this.listMenu).select(listName);
    }

    clickOnClosingIcon() {
        cy.get(this.closingIcon).click();
    }
    
    assertCardLocationAndName(number, cardName) {
        cy.get(this.cardDetails).eq(number-1).should('contain', cardName);
    }

    clickOnWatchOption() {
        cy.get(this.watchOption).click();
    }
    
    clickOnCloseListIcon() {
        cy.get(this.closeListIcon).click();
    }
    
    assertWatchIcon() {
        cy.get(this.watchIcon).should('be.visible');
    }

}

export default new BoardPageSandra()