describe('Recipe config', () => {
  it('Load the app', () => {
    cy.visit('/');
    cy.login();
  });
  it('Navigate to order creation', () => {
    cy.get('#orderNavDropdown').click()
    cy.get('#order-create').click()
    cy.url().should('include', '/orders/place-order')
  });
  it('Set data', () => {
    cy.get('#client').type('Tes')
    cy.get('#ngb-typeahead-0-0').click()
    cy.get('#date').type('2021-12-10')
    cy.get('#recipe').type('Cho')
    cy.get('#ngb-typeahead-1-0').click()
    cy.get('#amount').type('6')
    cy.get('#add-item').click()
  });
  it('Save', () => {
    cy.intercept(
      'POST',
      '**/orders').as('save')
    cy.get('#place-order').click()
    cy.wait('@save').then((xhr) => {
      expect(xhr.response.statusCode).to.be.eq(200);
    })
    cy.url().should('include', '/orders')
  });
});
