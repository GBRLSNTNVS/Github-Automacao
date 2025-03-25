const RepositoriesPage = require('../cypress/e2e/pages/RepositoriesPage');

describe('Repositories tests', () => {
    let repositoriesPage;

    beforeAll(() => {
        repositoriesPage = new RepositoriesPage();
    });

    test('should initialize correctly', () => {
        expect(repositoriesPage).toBeInstanceOf(RepositoriesPage);
    });

    test('should contain repository elements', () => {
        expect(repositoriesPage.elements).toHaveProperty('repositoryLink');
        expect(repositoriesPage.elements).toHaveProperty('pullRequestsTab');
    });

    test('should have main methods', () => {
        expect(typeof repositoriesPage.accessRepositoriesFromMenu).toBe('function');
        expect(typeof repositoriesPage.createRepository).toBe('function');
    });
});