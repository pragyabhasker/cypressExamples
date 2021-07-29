describe ('My first test', function() {
    it('My first test case', function() {
        //test step
         // cy. like driver. in selenium
         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
         // cy.get in cypress is like driver.findElement in selenium
         cy.get('input.search-keyword').type('ca');
         cy.wait(2000);
         // using the find method for parent child chaining of selector
         //cy.get('div.product:visible').should('have.length', 4);
         cy.get('div.products').find('div.product').should('have.length', 4);
         // minimise scope down to one product
          cy.get('div.products').find('div.product').eq(2).contains('ADD TO CART').click().then(function() {
              console.log('Pragya');
          })
         
         
         // $el - promise resolved before spying on it and getting text 
          cy.get('div.products').find('div.product').each(($el, index, $list) => {
           const vegName = $el.find('h4.product-name').text(); 
              if(vegName.includes('Cashews')) {
                  $el.find('button').click();
              }
      

        })

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART');


        /************/
        // const logoText = cy.get('div.greenLogo');
        // cy.log(logoText.text()); // this gives 'text() is not a function error, because we are storing in const and non cypress things are beng used
                                // so not just cy. commands, so it breaks. so you have to handle this promise using then function
                                // pass the logoo element in the function and then apply .text() function to get the text
        /************/
        //this is to print in logs
        // promise resolved before spying on .brand element and getting text
        cy.get('div.greenLogo').then(function(logoElement) {
            cy.log(logoElement.text())

        })





    })

    it('My second test case', function() {
        //test step
       

    })
})