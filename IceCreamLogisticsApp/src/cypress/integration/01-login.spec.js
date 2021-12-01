describe('Login test', () => {

  it('Load the app', () => {
    cy.visit("localhost:4200")
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.reload()
  })
  it('Login with default credentials', () => {
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('#login').click()
  })
  it('Verify login success', () => {
    cy.get('#password').should('not.exist');
  });
})
