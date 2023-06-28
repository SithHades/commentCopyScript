declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select a dropdown option by text
     */
    DsaCySelect(): any;
    /**
     * Custom command to select a dropdown input wrapper
     */
    DsaCySelectInputWrapper(): any;
  }
}
