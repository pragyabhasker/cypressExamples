
class HomePage {

   selectors = {
      nameEditBox: 'input[name="name"]:nth-child(2)',
      twoWayDataBox: 'input[name="name"]:nth-child(2)',
       genderSelect: '#exampleFormControlSelect1',
       radioButtonDisabled: '#inlineRadio3',
       shopNavItem: 'a[href*="shop"]'
    }

    getNameEditBox()
    {
        return cy.get(this.selectors.nameEditBox);
    }

    getTwoWayDataBinding()
    {
        return cy.get(this.selectors.twoWayDataBox);
    }

    getGender() 
    {
        return cy.get(this.selectors.genderSelect);
    }

    verifyRadioButtonDisabled()
    {
        return cy.get(this.selectors.radioButtonDisabled);
    }

    clickShopNavigationItem()
    {
        return cy.get(this.selectors.shopNavItem);
    }

}

export default HomePage;
