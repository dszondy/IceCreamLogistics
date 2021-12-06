describe('Create mixing batch', () => {
  it('Load the app', () => {
    cy.visit('/');
    cy.login();
  });
  it('Navigate to mixing creation', () => {
    cy.get('#mixingNavDropdown').click()
    cy.get('#mixing-create').click()
    cy.url().should('include', '/manufacturing/create-batch')
  });
  it('Set data', () => {
  });
  it('Save', () => {
  });
});
