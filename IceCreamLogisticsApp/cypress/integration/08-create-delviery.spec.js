describe('Create delivery', () => {
  it('Load the app', () => {
    cy.visit('/');
    cy.login();
  });
  it('Navigate to delivery creation', () => {
    cy.get('#deliveryNavDropdown').click()
    cy.get('#delivery-create').click()
    cy.url().should('include', '/delivery/new')
  });
  it('Set data', () => {
  });
  it('Save', () => {
  });
});
