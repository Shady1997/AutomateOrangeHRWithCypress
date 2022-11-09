/// <refrence types="cypress" />

const cypress = require("cypress");
const { it } = require("mocha");

// check positive secnario for login with valid credientials
it('Check Login Successfull with valid credientials',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});