declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select a dropdown option by text new
     */
    DsaCySelect(): any;
    /**
     * Custom command to select a dropdown input wrapper new
     */
    DsaCySelectInputWrapper(): any;
  }
}
