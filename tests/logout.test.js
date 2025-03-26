const LogoutPage = require('../cypress/e2e/pages/LogoutPage');

describe("Logout tests", () => {
    let logoutPage;

    beforeAll(() => {
        logoutPage = new LogoutPage();
    });

    test("should initialize correctly", () => {
        expect(logoutPage).toBeInstanceOf(LogoutPage);
    });

    test("should contain logout elements", () => {
        expect(logoutPage.elements).toHaveProperty("profileAvatar");
        expect(logoutPage.elements).toHaveProperty("signOutButton");
    });

    test("should have logout method", () => {
        expect(typeof logoutPage.logout).toBe("function");
    });
});
