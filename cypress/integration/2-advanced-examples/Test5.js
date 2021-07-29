describe ('My third test', function() {
    it('My test case for dropdowns, checkboxes and radiobuttons', function() {
        //test step
         // cy. like driver. in selenium
         cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

         cy.get('.table-display tr td:nth-child(2)').each(($el, index, $list) =>  {  

         const text = $el.text();
         if(text.includes('Python')) {
             cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price){
                 const priceText = price.text();
                 expect(priceText).to.equal('25');

             }) 

             
         }
        }) 


    })
})