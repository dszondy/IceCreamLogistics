describe('Login test', () => {

  it('Load the app', () => {
    cy.visit('/')
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.reload()
  })
  it('Login with default credentials', () => {
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.intercept(
      'POST',
      '**/auth').as('login')
    cy.get('#login').click()
    cy.wait('@login').then((xhr) => {
      expect(xhr.response.statusCode).to.be.eq(200);
    })
    })
  it('Verify login success', () => {
    cy.saveSession()
    cy.get('#password').should('not.exist');
  });
})
