import LogoutPage from "../pages/LogoutPage";
import LoginPage from "../pages/LoginPage";

describe('GitHub Logout', () => {
    const loginPage = new LoginPage();
    const logoutPage = new LogoutPage();
    const username = Cypress.env('GITHUB_USERNAME');
    const password = Cypress.env('GITHUB_PASSWORD');

    beforeEach(() => {
        loginPage.navigateToLoginPage();
        loginPage.enterCredentials(username, password);
    });

    it('should logout the user', () => {
        logoutPage.logout();
    });
});
