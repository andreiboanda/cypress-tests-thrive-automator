   describe('Thrive Automator Triggers CRUD Tests', () =>{
     before(() => {
     cy.request('POST', 'https://webhook.site/token')
            .then((response) =>{
                    expect(response.body).to.have.property('uuid')
                    const uuidToken = response.body.uuid;
                    const webHook = 'https://webhook.site' + '/'+ uuidToken
                    cy.wrap(webHook).as('webHook')

                    })
                    Cypress.session.clearAllSavedSessions()
     })

     beforeEach(() => {
         cy.session('todos', () => {
           cy.visit('/wp-login.php')
           cy.get('#user_login')
             .clear()
             .type('admin')
             .should('have.value', 'admin')
           cy.get('#user_pass')
             .type('baiyufJY%DZbZ0SWadiIp@1!')
           cy.get('#wp-submit').click()
           cy.url().should('include', '/wp-admin')
           cy.visit('/wp-admin/admin.php?page=thrive_automator')
         })
       })



     it('Create automation USER LEAVES A COMMENT', function () {
          cy.visit('/wp-admin/admin.php?page=thrive_automator')
          cy.contains('Create your first automation').click()
          cy.get('.tap-app-wordpress').click()
          cy.get('.tap-toggle-content > :nth-child(1)').click()
          cy.get('.tap-button--upper').click()
          cy.get('.last-step').click()
          cy.get('.tap-action-apps > :nth-child(4)').click()
          cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
          cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
          cy.get('[data-item-index="1"] > .tap-fw').click()
          cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('commenterName')
          cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(1)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('commenterEmail')
          cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(2)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('commenterURL')
          cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(3)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('commentDate')
          cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(4)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('commentGMT')
          cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(5)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('commentType')
          cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(6)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('commentParent')
          cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(7)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(9) > .tap-flex--column > .tap-fw > :nth-child(1)').type('commentPostID')
          cy.get(':nth-child(9) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(8)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(10) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userID')
          cy.get(':nth-child(10) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(9)').click()
          // Sent test connection
          cy.get('.tap-action-test-field > .tap-button--clean').click()
          cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
          cy.get('.tap-button--upper').click()
          // Add a name for the automation
          cy.get('.tap-inline-input-container > span').click()
          cy.get('.tap-inline-input-container').clear()
            .type('User leaves comment test')
          // Activate and Save and finish
          cy.get('.tap-aut-status > .tap-button--ghost').click()
          cy.get('.tap-button--save').click()

          cy.get('.tap-button--status').should('have.text', 'Active')
          cy.get('.tap-inline-input-container > span').should('have.text', 'User leaves comment test')
        })

        it('Create automation USER LOGS INTO ACCOUNT', function () {
          cy.visit('/wp-admin/admin.php?page=thrive_automator')
          cy.get('.tap-screen-header > .tap-button').click()
          cy.get('.tap-app-wordpress').click()
          cy.get('.tap-toggle-content > :nth-child(2)').click()
          cy.get('.tap-button--upper').click()
          cy.get('.last-step').click()
          cy.get('.tap-action-apps > :nth-child(4)').click()
          cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
          cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
          cy.get('[data-item-index="1"] > .tap-fw').click()

          cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userId')
          cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(1)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('lastLoggedIn')
          cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(2)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('registrationDate')
          cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(3)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('wordpressUsername')
          cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(4)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userEmail')
          cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(5)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
          cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(6)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
          cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(7)').click()

          // Sent test connection
          cy.get('.tap-action-test-field > .tap-button--clean').click()
          cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
          cy.get('.tap-button--upper').click()
          // Add a name for the automation
          cy.get('.tap-inline-input-container > span').click()
          cy.get('.tap-inline-input-container').clear()
            .type('User logs in test')
          // Activate and Save and finish
          cy.get('.tap-aut-status > .tap-button--ghost').click()
          cy.get('.tap-button--save').click()

          cy.get('.tap-inline-input-container > span').should('have.text', 'User logs in test')
        })

        it('Create automation USER LOGS OUT OF ACCOUNT', function () {
          cy.visit('/wp-admin/admin.php?page=thrive_automator')
          cy.get('.tap-screen-header > .tap-button').click()
          cy.get('.tap-app-wordpress').click()
          cy.get('.tap-toggle-content > :nth-child(3)').click()
          cy.get('.tap-button--upper').click()
          cy.get('.last-step').click()
          cy.get('.tap-action-apps > :nth-child(4)').click()
          cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
          cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
          cy.get('[data-item-index="1"] > .tap-fw').click()

          cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userId')
          cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(1)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('lastLoggedIn')
          cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(2)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('registrationDate')
          cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(3)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('wordpressUsername')
          cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(4)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userEmail')
          cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(5)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
          cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(6)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
          cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(7)').click()

          // Sent test connection
          cy.get('.tap-action-test-field > .tap-button--clean').click()
          cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
          cy.get('.tap-button--upper').click()
          // Add a name for the automation
          cy.get('.tap-inline-input-container > span').click()
          cy.get('.tap-inline-input-container').clear()
            .type('User logs out of account test')
          // Activate and Save and finish
          cy.get('.tap-aut-status > .tap-button--ghost').click()
          cy.get('.tap-button--save').click()

          cy.get('.tap-inline-input-container > span').should('have.text', 'User logs out of account test')
        })

        it('Create automation PASSWORD RESET LINK SENT', function () {
          cy.visit('/wp-admin/admin.php?page=thrive_automator')
          cy.get('.tap-screen-header > .tap-button').click()
          cy.get('.tap-app-wordpress').click()
          cy.get('.tap-toggle-content > :nth-child(4)').click()
          cy.get('.tap-button--upper').click()
          cy.get('.last-step').click()
          cy.get('.tap-action-apps > :nth-child(4)').click()
          cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
          cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
          cy.get('[data-item-index="1"] > .tap-fw').click()

          cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userId')
          cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(1)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('lastLoggedIn')
          cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(2)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('registrationDate')
          cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(3)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('wordpressUsername')
          cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(4)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userEmail')
          cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(5)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
          cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(6)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
          cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(7)').click()

          // Sent test connection
          cy.get('.tap-action-test-field > .tap-button--clean').click()
          cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
          cy.get('.tap-button--upper').click()
          // Add a name for the automation
          cy.get('.tap-inline-input-container > span').click()
          cy.get('.tap-inline-input-container').clear()
            .type('Password reset link sent test')
          // Activate and Save and finish
          cy.get('.tap-aut-status > .tap-button--ghost').click()
          cy.get('.tap-button--save').click()

          cy.get('.tap-inline-input-container > span').should('have.text', 'Password reset link sent test')
        })

        it('Create automation USER RESETS PASSWORD', function () {
          cy.visit('/wp-admin/admin.php?page=thrive_automator')
          cy.get('.tap-screen-header > .tap-button').click()
          cy.get('.tap-app-wordpress').click()
          cy.get('.tap-toggle-content > :nth-child(5)').click()
          cy.get('.tap-button--upper').click()
          cy.get('.last-step').click()
          cy.get('.tap-action-apps > :nth-child(4)').click()
          cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
          cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
          cy.get('[data-item-index="1"] > .tap-fw').click()

          cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userId')
          cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(1)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('lastLoggedIn')
          cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(2)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('registrationDate')
          cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(3)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('wordpressUsername')
          cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(4)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userEmail')
          cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(5)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
          cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(6)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
          cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(7)').click()

          // Sent test connection
          cy.get('.tap-action-test-field > .tap-button--clean').click()
          cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
          cy.get('.tap-button--upper').click()
          // Add a name for the automation
          cy.get('.tap-inline-input-container > span').click()
          cy.get('.tap-inline-input-container').clear()
            .type('User resets password test')
          // Activate and Save and finish
          cy.get('.tap-aut-status > .tap-button--ghost').click()
          cy.get('.tap-button--save').click()

          cy.get('.tap-inline-input-container > span').should('have.text', 'User resets password test')
        })

        it('Create automation POST IS PUBLISHED', function () {
          cy.visit('/wp-admin/admin.php?page=thrive_automator')
          cy.get('.tap-screen-header > .tap-button').click()
          cy.get('.tap-app-wordpress').click()
          cy.get('.tap-toggle-content > :nth-child(6)').click()
          cy.get('.tap-button--upper').click()
          cy.get('.last-step').click()
          cy.get('.tap-action-apps > :nth-child(4)').click()
          cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
          cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
          cy.get('[data-item-index="1"] > .tap-fw').click()

          cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postId')
          cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(1)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postAuthorEmail')
          cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(2)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postAuthorName')
          cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(3)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postContent')
          cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(4)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postStatus')
          cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(5)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postType')
          cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(6)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postTitle')
          cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(7)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(9) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postDate')
          cy.get(':nth-child(9) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(8)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(10) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postParent')
          cy.get(':nth-child(10) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(9)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(11) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postCategories')
          cy.get(':nth-child(11) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(10)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(12) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postTags')
          cy.get(':nth-child(12) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(11)').click()


          // Sent test connection
          cy.get('.tap-action-test-field > .tap-button--clean').click()
          cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
          cy.get('.tap-button--upper').click()
          // Add a name for the automation
          cy.get('.tap-inline-input-container > span').click()
          cy.get('.tap-inline-input-container').clear()
            .type('Post is published test')
          // Activate and Save and finish
          cy.get('.tap-aut-status > .tap-button--ghost').click()
          cy.get('.tap-button--save').click()

          cy.get('.tap-inline-input-container > span').should('have.text', 'Post is published test')
        })

        it('Create automation POST IS UPDATED', function () {
          cy.visit('/wp-admin/admin.php?page=thrive_automator')
          cy.get('.tap-screen-header > .tap-button').click()
          cy.get('.tap-app-wordpress').click()
          cy.get('.tap-toggle-content > :nth-child(7)').click()
          cy.get('.tap-button--upper').click()
          cy.get('.last-step').click()
          cy.get('.tap-action-apps > :nth-child(4)').click()
          cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
          cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
          cy.get('[data-item-index="1"] > .tap-fw').click()

          cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postId')
          cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(1)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postAuthorEmail')
          cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(2)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postAuthorName')
          cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(3)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postContent')
          cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(4)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postStatus')
          cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(5)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postType')
          cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(6)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postTitle')
          cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(7)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(9) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postDate')
          cy.get(':nth-child(9) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(8)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(10) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postParent')
          cy.get(':nth-child(10) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(9)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(11) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postCategories')
          cy.get(':nth-child(11) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(10)').click()
          cy.get('.tap-pair-field > .tap-button--ghost').click()

          cy.get('.tap-pair-field > :nth-child(12) > .tap-flex--column > .tap-fw > :nth-child(1)').type('postTags')
          cy.get(':nth-child(12) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
          cy.get(':nth-child(1) > .tap-toggle-heading').click()
          cy.get('.tap-toggle-content > :nth-child(11)').click()

          // Sent test connection
          cy.get('.tap-action-test-field > .tap-button--clean').click()
          cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
          cy.get('.tap-button--upper').click()
          // Add a name for the automation
          cy.get('.tap-inline-input-container > span').click()
          cy.get('.tap-inline-input-container').clear()
            .type('Post is updated test')
          // Activate and Save and finish
          cy.get('.tap-aut-status > .tap-button--ghost').click()
          cy.get('.tap-button--save').click()

          cy.get('.tap-inline-input-container > span').should('have.text', 'Post is updated test')
        })

       it('Create automation USER PROFILE UPDATED', function () {
         cy.visit('/wp-admin/admin.php?page=thrive_automator')
         cy.get('.tap-screen-header > .tap-button').click()
         cy.get('.tap-app-wordpress').click()
         cy.get('.tap-toggle-content > :nth-child(8)').click()
         cy.get('.tap-button--upper').click()
         cy.get('.last-step').click()
         cy.get('.tap-action-apps > :nth-child(4)').click()
         cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
         cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
         cy.get('[data-item-index="1"] > .tap-fw').click()

         cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userId')
         cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(1)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('lastLoggedIn')
         cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(2)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('registrationDate')
         cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(3)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('wordpressUsername')
         cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(4)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userEmail')
         cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(5)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
         cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(6)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
         cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(7)').click()

         // Sent test connection
         cy.get('.tap-action-test-field > .tap-button--clean').click()
         cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
         cy.get('.tap-button--upper').click()
         // Add a name for the automation
         cy.get('.tap-inline-input-container > span').click()
         cy.get('.tap-inline-input-container').clear()
           .type('User profile updated test')
         // Activate and Save and finish
         cy.get('.tap-aut-status > .tap-button--ghost').click()
         cy.get('.tap-button--save').click()

         cy.get('.tap-inline-input-container > span').should('have.text', 'User profile updated test')
       })

       it('Create automation USER CREATES NEW ACCOUNT', function () {
         cy.visit('/wp-admin/admin.php?page=thrive_automator')
         cy.get('.tap-screen-header > .tap-button').click()
         cy.get('.tap-app-wordpress').click()
         cy.get('.tap-toggle-content > :nth-child(9)').click()
         cy.get('.tap-button--upper').click()
         cy.get('.last-step').click()
         cy.get('.tap-action-apps > :nth-child(4)').click()
         cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
         cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
         cy.get('[data-item-index="1"] > .tap-fw').click()

         cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userId')
         cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(1)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('lastLoggedIn')
         cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(2)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('registrationDate')
         cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(3)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('wordpressUsername')
         cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(4)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userEmail')
         cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(5)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
         cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(6)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
         cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(7)').click()

         // Sent test connection
         cy.get('.tap-action-test-field > .tap-button--clean').click()
         cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
         cy.get('.tap-button--upper').click()
         // Add a name for the automation
         cy.get('.tap-inline-input-container > span').click()
         cy.get('.tap-inline-input-container').clear()
           .type('User creates new account test')
         // Activate and Save and finish
         cy.get('.tap-aut-status > .tap-button--ghost').click()
         cy.get('.tap-button--save').click()

         cy.get('.tap-inline-input-container > span').should('have.text', 'User creates new account test')
       })

       it('Create automation USER RESETS PASSWORD', function () {
         cy.visit('/wp-admin/admin.php?page=thrive_automator')
         cy.get('.tap-screen-header > .tap-button').click()
         cy.get('.tap-app-wordpress').click()
         cy.get('.tap-toggle-content > :nth-child(10)').click()
         cy.get('.tap-button--upper').click()
         cy.get('.last-step').click()
         cy.get('.tap-action-apps > :nth-child(4)').click()
         cy.get('.tap-input-field > .with-dynamic > input').type(this.webHook)
         cy.get('.tap-action-field-subfield > .tap-select-field > .v-popper > .tap-action-dropdown').click()
         cy.get('[data-item-index="1"] > .tap-fw').click()

         cy.get('.tap-pair-field > :nth-child(2) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userId')
         cy.get('.tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(1)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(3) > .tap-flex--column > .tap-fw > :nth-child(1)').type('lastLoggedIn')
         cy.get(':nth-child(3) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(2)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(4) > .tap-flex--column > .tap-fw > :nth-child(1)').type('registrationDate')
         cy.get(':nth-child(4) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(3)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(5) > .tap-flex--column > .tap-fw > :nth-child(1)').type('wordpressUsername')
         cy.get(':nth-child(5) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(4)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(6) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userEmail')
         cy.get(':nth-child(6) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(5)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(7) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
         cy.get(':nth-child(7) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(6)').click()
         cy.get('.tap-pair-field > .tap-button--ghost').click()

         cy.get('.tap-pair-field > :nth-child(8) > .tap-flex--column > .tap-fw > :nth-child(1)').type('userFirstName')
         cy.get(':nth-child(8) > .tap-flex--column > .tap-key-pair > .with-dynamic > .v-popper > .tap-dynamic-data-trigger').click()
         cy.get(':nth-child(1) > .tap-toggle-heading').click()
         cy.get('.tap-toggle-content > :nth-child(7)').click()

         // Sent test connection
         cy.get('.tap-action-test-field > .tap-button--clean').click()
         cy.get('.tap-action-response > .tap-button--ghost').should('have.text', 'Webhook sent successfully')
         cy.get('.tap-button--upper').click()
         // Add a name for the automation
         cy.get('.tap-inline-input-container > span').click()
         cy.get('.tap-inline-input-container').clear()
           .type('Role is added to a user test')
         // Activate and Save and finish
         cy.get('.tap-aut-status > .tap-button--ghost').click()
         cy.get('.tap-button--save').click()

         cy.get('.tap-inline-input-container > span').should('have.text', 'Role is added to a user test')
       })
     })