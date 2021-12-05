describe('Recipe config', () => {
  it('Load the app', () => {
    cy.visit('/');
    cy.login();
  });
  it('Navigate to config', () => {
    cy.get('#adminNavDropdown').click()
    cy.get('#config-recipes').click()
  });
  it('Add recipe', () => {
    cy.get('#search').type('Chocolate')
    cy.get('#add').click()
  });
  it('Set recipe', () => {
    cy.get('#name')
    cy.get('#description').type('description')
    cy.get('#price').type('500')
    cy.get('#ingredient').type('Cho')
    cy.get('#ngb-typeahead-0-0').click()
    cy.get('#amount').type('250')
    cy.get('#add-item').click()
  });
  it('Save recipe', () => {
    cy.intercept(
      'POST',
      '**/recipes').as('save')
    cy.get('#close').click()
    cy.wait('@save').then((xhr) => {
      expect(xhr.response.statusCode).to.be.eq(200);
    })
  });

})
