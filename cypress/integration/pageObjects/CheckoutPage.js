class CheckoutPage {

    selectors = {
        locationField: '#country',
        suggestions: 'div.suggestions a',
        checkBox: '#checkbox2',
        alertBox: 'div.alert.alert-success',
        purchaseButton: 'input[value="Purchase"]'


    }


    location() 
    {
        return cy.get(this.selectors.locationField);
    }

    suggestion() 
    {
        return cy.get(this.selectors.suggestions);
    }

    checkBox() {
        return cy.get(this.selectors.checkBox);
    }

    purchaseButton() {
        return cy.get(this.selectors.purchaseButton);
    }

    verifyAlertBox() 
    {
        return cy.get(this.selectors.alertBox);
    }

}

export default CheckoutPage;