describe('Creates new card in the list', () => {
  it('Creates new card in the list', () => {
    
    // idList must be changed to your list id (it is unique for every user)
    const idList = '63a2641d822eb8010fadd436';
    const bodyToSent = {
      name: 'Card name',
    }

    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/cards?idList=${idList}&key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
      body: bodyToSent,
    }).then((response) => {
      expect(response.body.idList).to.be.eql(idList);
      expect(response.body.id).to.be.not.empty;
      expect(response.body.id).to.be.a('string')
      expect(response.body.name).to.be.eql(bodyToSent.name);
    });
  });
});