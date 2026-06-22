class ContactUsPage {

    contactUs_Btn = "a[href='/contact_us']";
    getInTouch = 'div[class="contact-form"] h2.title.text-center';
    name = "input[placeholder='Name']";
    email = "input[placeholder='Email']";
    subject = "input[placeholder='Subject']";
    chooseFile = "input[name='upload_file']";
    submit_Btn = "input[value='Submit']";
    success_Msg = ".status.alert.alert-success";
    home_Btn = "a[class='btn btn-success'] span";

    // visitURL(url) {
    //     cy.visit(url);
    //     // cy.get(this.homePage_Logo).should("be.visible");
    // }

    clickContactUs() {
        cy.clickOn(this.contactUs_Btn);
    }


    verifygetInTouch(){
        cy.get(this.getInTouch)          
        .should('be.visible')
        .should('have.text','Get In Touch')
    }
     enterContactDetails() {
        cy.get(this.name).type('Datta Dhobe');
        cy.get(this.email).type('dattadhobe111@gmail.com');
        cy.get(this.subject).type('Contact Us Form');
        // cy.get(this.message).type('Testing Contact Us functionality');
    }

    uploadFile() {
        cy.get(this.chooseFile)
            .selectFile('cypress/fixtures/sample.pdf');
            
    }

    clickSubmit() {

        cy.on('window:confirm', () => true);

        cy.clickOn(this.submit_Btn);
    }

    verifySuccessMessage() {
        cy.get(this.success_Msg)
            .should('be.visible')
            .and('contain',
                'Success! Your details have been submitted successfully.');
    }

    clickHomeButton() {
        cy.clickOn(this.home_Btn);
    }

    verifyHomePage() {
        cy.url().should('eq',
            'https://automationexercise.com/');
    }
}

export default new ContactUsPage;