/**
 * Describes the Favorites Page test suite.
 */
describe('Favorites Page', () => {
    it('should render the favorites page and check if the main container exists', () => {
      cy.visit('/favorites');
  
      // Check if the main container exists
      cy.get('div.flex.flex-col.md\\:flex-row.gap-10.items-center.justify-center').should('exist');
    });
  });
  