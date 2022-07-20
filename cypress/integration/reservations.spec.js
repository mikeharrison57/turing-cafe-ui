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
    cy.get()
  })
})


// Write a test that checks that when data is put into the form, the value is reflected in that form input.
// Write a test to check the user flow of adding a new reservation to the page.