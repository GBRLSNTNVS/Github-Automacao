/// <reference types="cypress"/>

class LogoutPage {
    elements = {
        profileAvatar: () => cy.get("span.Button-label img.avatar"),
        signOutButton: () => cy.get("span.prc-ActionList-ItemLabel-TmBhn"),
        confirmSignOutButton: () => cy.get("input[name='commit'][value='Sign out']"),
    };

    logout() {
        this.elements.profileAvatar().should('be.visible').click();
        this.elements.signOutButton().contains("Sign out").click();
        this.elements.confirmSignOutButton().click();
    }
}

export default LogoutPage;
