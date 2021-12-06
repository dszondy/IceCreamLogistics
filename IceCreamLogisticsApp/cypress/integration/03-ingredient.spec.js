describe('Ingredient config', () => {
  it('Load the app', () => {
    cy.visit('/');
    cy.login();
  });
  it('Navigate to config', () => {
    cy.get('#adminNavDropdown').click()
    cy.get('#config-ingredients').click()
  });
  it('Add ingredient', () => {
    cy.get('#search').type('Choco beans')
    cy.get('#add').click()
  });
  it('Set ingredient', () => {
    cy.get('#name')
    cy.get('#measurementUnit').type('g')
    cy.get('#quantityPerPackage').type('500')
    cy.get('#warningThreshold').type('750')
  });
  it('Save ingredient', () => {
    cy.intercept(
      'POST',
      '**/ingredients').as('save')
    cy.get('#close').click()
    cy.wait('@save').then((xhr) => {
      expect(xhr.response.statusCode).to.be.eq(200);
    })
  });

})
