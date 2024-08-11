/**
 * Describes the test case for the jobs Page.
 * It renders the jobs page and checks if the card exists.
 */
describe('Favorites Page', () => {
  it('should render the jobs page and check if the card exists', () => {
      cy.visit('/jobs');
      cy.wait(10000);
      cy.get('.relative').should('exist');
      
      cy.get('.px-5').should('exist');
      
      cy.get('.px-5.absolute.top-6.right-0.cursor-pointer').should('exist');
  });
});
