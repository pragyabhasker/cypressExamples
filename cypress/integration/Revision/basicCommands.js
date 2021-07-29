describe('My first test suite', function() {
    
    it('My first test case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
        
        

        // cy.get('div.product:visible').should('have.length', 4)

        // cy.get('div.products div.product').should('have.length', 4)

        // parent child chaining to get elements
        cy.get('.products').find('.product').should('have.length', 4)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        
        // iterate and find cashews and click on add to cart for that item only
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegText = $el.find('.product-name').text()
            if(vegText.includes('Cashews')) {
                $el.find('button').click()
            }
        })

        cy.get('.brand').then(function(logo) {
            cy.log(logo.text())

        })

        cy.get('.brand').should('have.text','GREENKART')
        

    })
})