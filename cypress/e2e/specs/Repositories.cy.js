const LoginPage = require("../pages/LoginPage");
const RepositoriesPage = require("../pages/RepositoriesPage");

describe("GitHub Repositories", () => {
    const loginPage = new LoginPage();
    const repositoriesPage = new RepositoriesPage();
    const username = Cypress.env('GITHUB_USERNAME');
    const password = Cypress.env('GITHUB_PASSWORD');
    const repositoryName = "NOME_DO_REPOSITORIO_EXISTENTE";
    const newRepositoryName = "NOME_PARA_CRIAR_REPOSITORIO";

    beforeEach(() => {
        loginPage.navigateToLoginPage();
        loginPage.enterCredentials(username, password);
    });

    it("should access repositories via menu and navigate to Pull Requests", () => {
        repositoriesPage.accessRepositoriesFromMenu();
        repositoriesPage.navigateToRepository(repositoryName);
        repositoriesPage.navigateToPullRequests();
    });

    it("should create a new repository and take screenshot", () => {
        repositoriesPage.accessRepositoriesFromMenu();
        repositoriesPage.createRepository(newRepositoryName);
        repositoriesPage.takeScreenshot(newRepositoryName);
    });
});
