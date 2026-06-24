Feature:Registration

Background:
Given visit to the web

# Scenario:register user with Existing email
# # Given visit to the web
# When click on signup login
# Then Enter name and already registered email address
# And Verify error 'Email Address already exist!' is visible

# @Smoke
# Scenario:Verify Test Cases Page
# When Click on 'Test Cases' button
# Then Verify user is navigated to test cases page successfully


# Scenario: Search Product
# When Click on 'Products' button
# Then Verify user is navigated to ALL PRODUCTS page successfully
# And Enter product name in search input and click search button
#     |ProductName|
#     |Sleeveless Unicorn Print Fit & Flare Net Dress - Multi|
# Then Verify 'SEARCHED PRODUCTS' is visible


# Scenario:Verify Subscription in Cart page
# When Click 'Cart' button  
# Then Scroll down to footer and Verify text 'SUBSCRIPTION' 
# And Enter email address in input and click arrow button
# And Verify success message 'You have been successfully subscribed!' is visible

Scenario:Verify Product quantity in Cart
When Click 'View Product' for any product on home page
Then Verify product detail is opened
And increase quantity
Then Click 'Add to cart' and then Click 'View Cart' button
And Verify that product is displayed in cart page with exact quantity