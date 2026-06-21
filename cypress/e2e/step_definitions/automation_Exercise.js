import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import registration from "../pages/registrationPage";
import test_cases from '../pages/testcases_Page'

Given("visit to the web", () => {
    registration.visit("https://automationexercise.com");
});

When("click on signup login",()=>{
    registration.login()
});

Then("Enter name and already registered email address",()=>{
    registration.create_NewUser()
})

Then("Verify error 'Email Address already exist!' is visible",()=>{
    registration.errorMessage();
})


When("Click on 'Test Cases' button",()=>{
    test_cases.clickon_testCases();
})

Then('Verify user is navigated to test cases page successfully',()=>{
    cy.url().should('have.text','https://automationexercise.com/test_cases')
})