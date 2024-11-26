/// <reference types="cypress"/>

// describe('Todo application', () => {
//   it('should log any accessibility failures', () => {
//     //cy.visit('https://todomvc.com/examples/javascript-es5/dist/#/');
//     cy.visit('https://broken-workshop.dequelabs.com/');
//     cy.injectAxe();
//     cy.checkA11y();
//   });
// });


describe('Todo application', () => {
  beforeEach(() => {
    cy.visit('https://broken-workshop.dequelabs.com/');
    cy.injectAxe();
  });

  it('should log any accessibility failures', () => {
    cy.checkA11y();
  });

  it('should exclude specific elements on the page', () => {
    cy.checkA11y({ exclude: ['.Recipes__card-head'] });
  });

  it('should only test specific element on the page', () => {
    cy.checkA11y('.Recipes__card-head');
  });


  it('should only include rules with serious and critical impacts', () => {
    //cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
    cy.checkA11y(null, { includedImpacts: ['minor'] });
  });

  it.only('should exclude specific accessibility rules', () => {
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: false },
      },
    });
  });
});