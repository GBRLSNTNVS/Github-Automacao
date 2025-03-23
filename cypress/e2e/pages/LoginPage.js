/// <reference types="cypress"/>

class LoginPage {
    elements = {
        signInButton: () => cy.xpath("//a[contains(text(), 'Sign in') and not(contains(@class, 'd-none'))]"),
        emailInput: () => cy.get("#login_field"),
        passwordInput: () => cy.get("#password"),
        submitButton: () => cy.get("input[type='submit']"),
        profileAvatar: () => cy.get("span.Button-label img.avatar"),
        profileMenuItem: () => cy.contains("Your profile"),
        profileUsername: () => cy.get("span.p-nickname.vcard-username"),
    };

    navigateToLoginPage() {
        cy.visit('https://github.com');
        this.elements.signInButton().should('be.visible').click();
    }

    enterCredentials(username, password) {
        this.elements.emailInput().should('be.visible').type(username);
        this.elements.passwordInput().should('be.visible').type(password);
        this.elements.submitButton().click();
    }

    verifyUserProfile(expectedUsername) {
        cy.url().should('include', 'github.com');
        this.elements.profileAvatar().should('be.visible').click();
        this.elements.profileMenuItem().click();
        this.elements.profileUsername().should('contain', expectedUsername);
    }
} 

export default LoginPage;
