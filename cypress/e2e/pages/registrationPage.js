class Registration {

    homePage_Logo = '[alt="Website for automation practice"]';
    login_Btn = '[class="col-sm-8"] li:nth-child(4)';
    name = '[data-qa="signup-name"]';
    email = '[data-qa="signup-email"]';
    signup_Btn = '[data-qa="signup-button"]';
    err_msg = '.signup-form form p';

    visit(url) {
        cy.visit(url);
        cy.get(this.homePage_Logo).should("be.visible");
    }

    login() {
        cy.clickOn(this.login_Btn);
        cy.get('.signup-form h2').should('be.visible')
    }

    create_NewUser() {
        cy.get(this.name).type('Datta Dhobe');
        cy.get(this.email).type('dattadhobe1111@gmail.com');
        cy.clickOn(this.signup_Btn);

    }

    errorMessage() {
        cy.get(this.err_msg).contains('Email Address already exist!');
    }
}

export default new Registration();