var RegistrationPage = require('/Users/worker/Documents/Work/The Strew/angular-registration-login-example-master/protractor/page/registration.page.js');
var LoginPage = require('/Users/worker/Documents/Work/The Strew/angular-registration-login-example-master/protractor/page/login.page.js');

describe('Login Page', function(){
    registrationPage = new RegistrationPage();
    loginPage = new LoginPage();

    beforeEach(function () {
        browser.get('http://127.0.0.1:8080/#!/login');
        browser.waitForAngular();
    });

    describe('When logging in a registered user', function () {
        it('Should open the homepage with user greetings', function () {

            //Register User
            registrationPage.registerBtn.click();
            registrationPage.fillUpRegistrationForm('testFirstName','testLastName','testUserName','testPassword');
            registrationPage.submitBtn.click();
            var registrationSucess = element(by.css('body > div.jumbotron > div > div > div.ng-binding.ng-scope.alert.alert-success'));
            expect(registrationSucess.getText()).toMatch('Registration successful');

            //Login User
            loginPage.username.sendKeys('testUserName');
            loginPage.password.sendKeys('testPassword');
            loginPage.submitBtn.click();
            var youreLoggedIn = element(by.css('p.ng-scope'));
            expect(youreLoggedIn.getText()).toMatch('You\'re logged in!!');
        })
    })
})