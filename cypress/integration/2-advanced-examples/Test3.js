describe ('My third test', function() {
    it('My test case for dropdowns, checkboxes and radiobuttons', function() {
        //test step
         // cy. like driver. in selenium
         cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
         
         //checkboxes
         cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
         cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
         cy.get('input[type="checkbox"]').check(['option2', 'option3']);

         //static dropdown
         cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');

         //dynamic dropdown
         cy.get('#select-class-example #autocomplete').type('ind')
         cy.get('#ui-id-1 div').each(($el, index, $list) => {
            cy.log($el.text());
            if ($el.text() === ('India')) {
                $el.click();
            }
              

         })
         //autocomplete
         cy.get('#autocomplete').should('have.value', 'India');
         //visible/invisible elements
         cy.get('#displayed-text').should('be.visible');
         cy.get('#hide-textbox').click();
         cy.get('#displayed-text').should('not.be.visible');

         //radiobuttons
         cy.get('[value="radio2"]').check().should('be.checked');




         
    })
})