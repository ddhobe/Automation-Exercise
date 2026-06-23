import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import registration from "../pages/registrationPage";
import test_cases from '../pages/testcases_Page';
import search_Product from "../pages/searchProduct";
import subscription from "../pages/subcrip_cartPage"

Given("visit to the web", () => {
    registration.visit("https://automationexercise.com");
});

When("click on signup login", () => {
    registration.login()
});

Then("Enter name and already registered email address", () => {
    registration.create_NewUser()
})

Then("Verify error 'Email Address already exist!' is visible", () => {
    registration.errorMessage();
})


When("Click on 'Test Cases' button", () => {
    test_cases.clickon_testCases();
})

Then('Verify user is navigated to test cases page successfully', () => {
    cy.url().should('includes', 'https://automationexercise.com/test_cases')
})

When("Click on 'Products' button",()=>{
//searchProduct.product();
search_Product.product();
})

Then('Verify user is navigated to ALL PRODUCTS page successfully',()=>{
    // searchProduct.verify_productPage();
    search_Product.verify_productPage();

})
Then ("Enter product name in search input and click search button",(datatable)=>{
   const data=datatable.hashes();

        search_Product.find_product(data[0].ProductName);
    
})

Then("Verify 'SEARCHED PRODUCTS' is visible",()=>{
    search_Product.verify_Text();
})



When("Click 'Cart' button",()=>{
   subscription.clickON_Cart();
})

Then("Scroll down to footer and Verify text 'SUBSCRIPTION'",()=>{
    subscription.verify_footer('Subscription');
})

Then('Enter email address in input and click arrow button',()=>{
    subscription.enter_email('dattadhobe1111@gmail.com');
})

Then("Verify success message 'You have been successfully subscribed!' is visible",()=>{

    subscription.verify_msg();
    })