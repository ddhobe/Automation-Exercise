import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import contactUs from "../pages/ContactUsPage";
import HomePage from "../pages/HomePage";






When('User is on the home page',()=>{
    HomePage.verifyHomePage()
})

When('User clicks on Contact Us button',()=>{
contactUs.clickContactUs(); 

})
Then('GET IN TOUCH section should be displayed',()=>{
    contactUs.verifygetInTouch();
})

When("Enter name email subject and message", () => {
    contactUs.enterContactDetails();
});

Then("Upload file", () => {
    contactUs.uploadFile();
});

Then("Click Submit button", () => {
    contactUs.clickSubmit();
});

Then("Verify success message is visible", () => {
    contactUs.verifySuccessMessage();
});

When("Click Home button", () => {
    contactUs.clickHomeButton();
});

Then("Verify user landed on home page successfully", () => {
    contactUs.verifyHomePage();
});