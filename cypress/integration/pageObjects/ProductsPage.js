class ProductsPage {

    selectors = {

        checkoutButton: 'a.nav-link.btn.btn-primary'

    }

    checkoutButton() 
    {
        return cy.get(this.selectors.checkoutButton);
    }



}

export default ProductsPage;