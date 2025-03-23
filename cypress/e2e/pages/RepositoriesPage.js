/// <reference types="cypress"/>

class RepositoriesPage {
    elements = {
        profileAvatar: () => cy.get("span.Button-label img.avatar"),
        repositoryAccessMenu: () => cy.contains("span.prc-ActionList-ItemLabel-TmBhn", "Your repositories"),
        repositoryAccessTab: () => cy.get("span[data-view-component='true']"),
        repositoryLink: (repoName) => cy.get('a[itemprop="name codeRepository"]').contains(repoName),
        pullRequestsTab: () => cy.get('span[data-content="Pull requests"]'),
        createRepositoryButton: () => cy.xpath("//a[@href='/new' and contains(@class, 'btn-primary') and not(contains(@class, 'd-md-none'))]"),
        repositoryNameInput: () => cy.xpath("//input[@type='text' and contains(@aria-describedby, 'RepoNameInput')]"),
        createRepositoryConfirmButton: () => cy.xpath("//button[.//span[text()='Create repository']]"),
    };

    accessRepositoriesFromMenu() {
        this.elements.profileAvatar().should('be.visible').click();
        this.elements.repositoryAccessMenu().should('be.visible').click();
    }

    accessRepositoriesFromTab() {
        this.elements.repositoryAccessTab().contains("Repositories").should('be.visible').click();
    }

    navigateToRepository(repoName) {
        this.elements.repositoryLink(repoName).should('be.visible').click();
    }

    navigateToPullRequests() {
        this.elements.pullRequestsTab().should('be.visible').click();
    }

    createRepository(repoName) {
        this.elements.createRepositoryButton().should('be.visible').click();
        this.elements.repositoryNameInput().should('be.visible').type(repoName);
        this.elements.createRepositoryConfirmButton().should('be.visible').click();
    }
}

export default RepositoriesPage;
