describe('Client config', () => {
  it('Load the app', () => {
    cy.visit('/');
    cy.login();
  });
  it('Navigate to config', () => {
    cy.get('#adminNavDropdown').click()
    cy.get('#config-clients').click()
  });
  it('Add client', () => {
    cy.get('#search').type('Test Client')
    cy.get('#add').click()
  });
  it('Set client', () => {
    cy.get('#name')
    cy.get('#phone').type('1234567890')
    cy.get('#email').type('test@test.test')
    cy.get('#country').type('Hungary')
    cy.get('#region').type('Budapest')
    cy.get('#city').type('Budapest')
    cy.get('#addressLine').type('Test address 123')
    cy.get('#zip').type('12345')
  });
  it('Save client', () => {
    cy.intercept(
      'POST',
      '**/clients').as('save')
    cy.get('#close').click()
    cy.wait('@save').then((xhr) => {
      expect(xhr.response.statusCode).to.be.eq(200);
    })
  });

})
