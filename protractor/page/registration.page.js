module.exports = function(){

    this.registerBtn = element(by.css('a.btn.btn-link'));
    this.firstName = element(by.css('#firstName'));
    this.lastName = element(by.css('#Text1'));
    this.username = element(by.css('#username'));
    this.password = element(by.css('#password'));
    this.submitBtn = element(by.css('button.btn.btn-primary'));

    this.fillUpRegistrationForm = function (firstName, lastName, username, password) {
        this.firstName.sendKeys(firstName);
        this.lastName.sendKeys(lastName);
        this.username.sendKeys(username);
        this.password.sendKeys(password);
    }

}