describe('Turing Cafe Reservations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    // cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'example-orders'})
  })

  it('should display the title Turing Cafe Reservations at the top of the page', () => {
    cy.get('h1').should('have.text', 'Turing Cafe Reservations')
  })

  it('should have a reservation form for the user to fill out', () => {
    cy.get('form').should('exist')
    cy.get('input').should('exist')
    cy.get('.resy-button').should('exist')
  })
  
  it('should have nine reservation cards to start', () => {
    cy.get('.resy-container').find('.resy-card').should('have.length', 9)
  })

  it('should allow the user to fill out the reservation form', () => {
    cy.get('.name-input').type('Michael').should('have.value', 'Michael')
    cy.get('.date-input').type('5/16').should('have.value', '5/16')
    cy.get('.time-input').type('6:00').should('have.value', '6:00')
    cy.get('.guests-input').clear().type(4).should('have.value', 4)
  })

  it('should submit user info to reservations, and display new reservation on the DOM', () => {
    cy.get('.name-input').type('Carter H.')
    cy.get('.date-input').type('6/20')
    cy.get('.time-input').type('7:00')
    cy.get('.guests-input').clear().type(10)
    cy.get('.resy-button').click()
    cy.get('.resy-container').find('.resy-card').should('have.length', 10)
    cy.get('.resy-card').last().contains('Carter H')
  })

  

})

// Write a test to check the user flow of adding a new reservation to the page.