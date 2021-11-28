describe('Login test', () => {

  it('Can login with valid credentials', () => {
    cy.visit("localhost:4200")
    cy.get('#name').type('admin')
    cy.get('#password').type('admin')
  })
})
