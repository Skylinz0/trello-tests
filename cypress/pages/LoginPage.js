class LoginPage {
    constructor() {
        this.loginPage = 'https://trello.com/login';
        this.loginButton = '#login';
        this.googleAuthButton = '#google-auth-button';
        this.usernameField = '#user';
        this.passwordField = '#password';
        this.submitButton = '#login-submit';
    }
    
    openTrelloLoginPage() {
        cy.visit(this.loginPage);
    }

    loginWithUsernameAndPassword(username, password) {
        cy.get( this.usernameField).type(username);
        cy.get(this.loginButton).click();
        cy.get(this.googleAuthButton).should('be.visible');
        cy.get(this.passwordField).type(password);
        cy.get( this.submitButton).click();
    }
}
export default new LoginPage()