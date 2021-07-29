class BasketPage {

    selectors = {
        checkoutBtn: 'button.btn.btn-success'
    }

    checkoutButton() {
        return cy.get(this.selectors.checkoutBtn);
    }
}

export default BasketPage;