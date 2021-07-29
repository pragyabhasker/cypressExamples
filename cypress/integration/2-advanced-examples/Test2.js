describe ('My second test', function() {
    it('My test case', function() {
        //test step
         // cy. like driver. in selenium
         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
         // cy.get in cypress is like driver.findElement in selenium
         cy.get('input.search-keyword').type('ca');
         cy.wait(2000);
        
          // $el - promise resolved before spying on it and getting text 
          cy.get('div.products').find('div.product').each(($el, index, $list) => {
           const vegName = $el.find('h4.product-name').text(); 
              if(vegName.includes('Cashews')) {
                  $el .find('button').click();
              }
      

        })

        cy.get('a.cart-icon').click();
        cy.get('div.cart-preview').find('button').click();
        cy.contains('Place Order').click();
    })
})