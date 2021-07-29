describe ('My sixth test suite', function() {
    it('My test case for mouse hover', function() {
        //test step
         // cy. like driver. in selenium
         cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

       // cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include', '#top')


    })
})