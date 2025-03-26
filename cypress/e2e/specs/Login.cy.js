const LoginPage = require("../pages/LoginPage");

describe('GitHub Login', () => {
    const loginPage = new LoginPage();
    const email = Cypress.env('GITHUB_USERNAME');
    const password = Cypress.env('GITHUB_PASSWORD');
    const username = 'SEU_USUARIO_GITHUB'

    it("should access the site, login, and validate the user profile name", () => {
        loginPage.navigateToLoginPage();
        loginPage.enterCredentials(email, password);
        loginPage.verifyUserProfile(username);
    });
});
