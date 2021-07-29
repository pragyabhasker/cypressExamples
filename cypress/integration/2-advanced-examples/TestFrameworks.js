/// <reference types = "Cypress"/>
import BasketPage from '../pageObjects/BasketPage';
import CheckoutPage from '../pageObjects/CheckoutPage';
import HomePage from '../pageObjects/HomePage';
import ProductsPage from '../pageObjects/ProductsPage';


describe ('My angular test suite', function() {
    
    // hooks - before, beforeeach etc - always go after describe blocks
    before(function() {
        //runs once before all tests in the block

        //cy.fixture allows to talk to files in fixtures folder
        //use data variable pull values from example.json
        cy.fixture('example').then(function(data)
        {
             this.data = data;
        })

    })


    it('My first test case', function() {
        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        const basketPage = new BasketPage();
        const checkoutPage = new CheckoutPage();
        //test step
         // cy. like driver. in selenium
         cy.visit("https://rahulshettyacademy.com/angularpractice/");
         
         homePage.getNameEditBox().type(this.data.name);
         
         homePage.getNameEditBox().should('have.attr', 'minlength', '2');
         
         homePage.getGender().select(this.data.gender).should('have.value', 'Female');

         homePage.getTwoWayDataBinding().should('have.value', this.data.name);

         // use Cypress.config for setting config of timeout to override the defaultCommandTimeout
         // set in the cypress.json  folder
         // this will apply to all the steps from here onwards:
         Cypress.config('defaultCommandTimeout', 8000);

         homePage.verifyRadioButtonDisabled().should('be.disabled');
         //cy.pause(); - to debug

         homePage.clickShopNavigationItem().click();
         
         // to bring the array here
         this.data.productName

         //array1.forEach(element => console.log(element));

         this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
         })

         productsPage.checkoutButton().click();
         var total =0;

         cy.get('table tr td:nth-child(4)>strong').each(($el, index, $list) => {
            const price = $el.text();
           // cy.log(price);
            var res = price.split(" ");
            res = res[1].trim();
            total = Number(total) + Number(res);
            
        }).then(function()
        {
            cy.log(total);
        })

        cy.get('h3 strong').then(function(element)
        {
            const totalAmount = element.text();
            var res = totalAmount.split(" ");
            var formatTotal = res[1].trim();
            cy.log(formatTotal);
            expect(Number(formatTotal)).to.equal(total);
        })

         // basketPage.checkoutButton().click();

        //  checkoutPage.location().type('india');
        //  checkoutPage.suggestion().click();
        //  checkoutPage.checkBox().click({force:true});
        //  checkoutPage.purchaseButton().click();

        //  checkoutPage.verifyAlertBox().then(function(element)
        //  {
        //      const actualText = element.text();
        //      expect(actualText.includes("Success")).to.be.true;
        //  })

         cy.get('table tr td:nth-child(4)>strong').each(($el, index, $list) => {
             const price = $el.text();
             cy.log(price);
         })

         



         

         


    })
})