class productQuantity_InCart {
    Viewproduct_Text = 'a[href="/product_details/1"]';
    quantity="#quantity";
    addToCart='[class="btn btn-default cart"]';
    viewCart='.text-center [href="/view_cart"]'
    selectedQuantity='[class="cart_quantity"]';
    
    clickOnProductTab() {
        cy.clickOn(this.Viewproduct_Text)
    }
    verifyPoductPage(){
        cy.url().should('include','product_details/')
    }
    increaseQuantity(num){
        cy.get(this.quantity).clear().type(num)
    }
    clickon_AddToCart(){
        cy.clickOn(this.addToCart);
        cy.clickOn(this.viewCart);
    }
    verifyQuantity(){
        cy.get(this.selectedQuantity).then(($count)=>{
            let count1=$count.text().trim()
            cy.log(count1);

            cy.wrap(count1).should('eq','4')
           // cy.get(this.selectedQuantity).should('have.text','4');

        });
        

    }

}

export default new productQuantity_InCart();