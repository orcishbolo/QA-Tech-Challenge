/// <reference types="cypress" />
class homeObjects {
    homePage = {
        imgLogo: () => cy.get('.logo', { timeout: 8000 }),
        lnkSimPlans: () => cy.get('[href="/sim-plans"]', { timeout: 8000 }),
        imgBanner: () => cy.get('.style-ts-display-medium', { timeout: 8000 })
    }
}

export default new homeObjects()