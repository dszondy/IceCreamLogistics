describe('My First Test', () => {

  it('Does not do much!', () => {
    cy.visit("localhost:4200/settings/recipes")
    expect(true).to.equal(true)
  })
})
