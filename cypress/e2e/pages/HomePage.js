class HomePage{
    verifyHomePage() {
        cy.url().should('eq',
            'https://automationexercise.com/');
    }
}
export default new HomePage;