class test_cases{
    tc_Btn='.shop-menu li:nth-child(5)';

    clickon_testCases(){
        cy.clickOn(this.tc_Btn);
        cy.url().should('contains','https://automationexercise.com/test_cases')
    }


}

export default new test_cases();