class subscription{
    cart_Btn=".col-sm-8 ul li:nth-child(3)";
    suubcription_Text='[class="col-sm-3 col-sm-offset-1"] h2 ';
    email_inputBox="#susbscribe_email";
    subscribe_Icon='#subscribe'
    success_msg='[class="alert-success alert"]'

    clickON_Cart(){
        cy.clickOn(this.cart_Btn)
    }
    verify_footer(text){
       cy.get('footer').scrollIntoView();
       cy.get(this.suubcription_Text).should('have.text',"Subscription");
    };

    enter_email(Email){
        cy.get(this.email_inputBox).type(Email);
        cy.clickOn(this.subscribe_Icon);
    }
    verify_msg(){
        cy.get(this.success_msg).should('be.visible')
    }


}
export default new subscription();