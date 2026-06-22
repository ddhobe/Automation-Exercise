Feature:Registration

Background:
Given visit to the web

Scenario:register user with Existing email
# Given visit to the web
When click on signup login
Then Enter name and already registered email address
And Verify error 'Email Address already exist!' is visible

@Smoke
Scenario:Verify Test Cases Page
When Click on 'Test Cases' button
Then Verify user is navigated to test cases page successfully


Scenario: Search Product
When Click on 'Products' button
Then Verify user is navigated to ALL PRODUCTS page successfully
And Enter product name in search input and click search button
    |ProductName|
    |Sleeveless Unicorn Print Fit & Flare Net Dress - Multi|

Then Verify 'SEARCHED PRODUCTS' is visible
# Then Verify all the products related to search are visible   

