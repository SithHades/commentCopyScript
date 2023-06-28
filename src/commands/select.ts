/**
 * Custom command to select a dropdown option by text
 */
Cypress.Commands.add('DsaCySelect', () => {
  cy.get('select');
});

/**
 * Custom command to select a dropdown input wrapper
 */
Cypress.Commands.add('DsaCySelectInputWrapper', () => {});
