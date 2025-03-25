const LoginPage = require('../cypress/e2e/pages/LoginPage');

describe('Login tests', () => {
  let loginPage;

  beforeAll(() => {
    loginPage = new LoginPage();
  });

  test('should initialize correctly', () => {
    expect(loginPage).toBeInstanceOf(LoginPage);
  });

  test('should contain main elements', () => {
    expect(loginPage.elements).toHaveProperty('signInButton');
    expect(loginPage.elements).toHaveProperty('emailInput');
    expect(loginPage.elements).toHaveProperty('passwordInput');
  });

  test('should have navigation method', () => {
    expect(typeof loginPage.navigateToLoginPage).toBe('function');
  });

  test('should have credentials method', () => {
    expect(typeof loginPage.enterCredentials).toBe('function');
  });
});