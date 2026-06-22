class search_Product{
    product_Btn='[href="/products"]';
    text='[class="title text-center"]';
    searchBox='[name="search"]';
    search_Icon='[id="submit_search"]';
    text2='[class="title text-center"]';

    product(){
        cy.clickOn(this.product_Btn);
    };

    verify_productPage(){
        cy.get(this.text).should('have.text','All Products')
    };

    find_product(product){
        cy.get(this.searchBox).type(product)
        cy.clickOn(this.search_Icon);
    };

    verify_Text(){
        cy.get(this.text2).should('have.text','Searched Products')
    }
    


}
export default new search_Product();