describe('My checkBox test suite', function() {
    
    it('My checkbox test case', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // for multiple checkbox selections pass array values of element in check method
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //static dropdown selection
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')

        cy.get('#ui-id-1').find('div').each(($el, index, $list) => {
            if($el.text() === "India") {
                $el.click();
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')




        

    })
})