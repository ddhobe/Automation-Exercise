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