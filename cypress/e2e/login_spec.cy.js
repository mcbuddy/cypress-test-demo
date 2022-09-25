describe('Login Test', () => {
  it('Success Login', () => {
    cy.visit('/')
    cy.get('a.login').click()
    cy.get('#email').type('dtechover@example.com')
    cy.get('#passwd').type('Test1234')
    cy.get('#SubmitLogin').click()
    cy.get('h1.page-heading').should('contain', 'My account')
  })

  it('Fail Login', () => {
    cy.visit('/')
    cy.get('a.login').click()
    cy.get('#email').type('dtechover@test.com')
    cy.get('#passwd').type('Test1234')
    cy.get('#SubmitLogin').click()
    cy.get('div.alert-danger').should('contain', 'Authentication failed.')
  })
})