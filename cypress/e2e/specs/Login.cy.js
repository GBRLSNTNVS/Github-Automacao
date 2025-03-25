const LoginPage = require("../pages/LoginPage");

describe('GitHub Login', () => {
    const loginPage = new LoginPage();
    const username = Cypress.env('GITHUB_USERNAME');
    const password = Cypress.env('GITHUB_PASSWORD');

    it('should access the site, login, and validate the user profile name', () => {
        loginPage.navigateToLoginPage();
        loginPage.enterCredentials(username, password);
        loginPage.verifyUserProfile(username);
    });
});
