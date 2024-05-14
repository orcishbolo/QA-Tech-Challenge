/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import simPlan from "../scenarios/7DaySimPlan"


describe('QA Tech Challange', () => {
  it('7DaysSimPlan', () => {
    simPlan.Click7DaysSimPlan()
    simPlan.Landing7DaysSimPlanPage()
    simPlan.Cart7DaysSimPlan()
    simPlan.YourOrder7DaysSimPlan()
    simPlan.Checkout7DaysSimPlan()
    simPlan.AboutYou7DaysSimPlan()
    simPlan.Delivery7DaysSimPlan()
    simPlan.Payment7DaysSimPlan()
    simPlan.CardPayment7DaysSimPlan()
    simPlan.VerifyOrderBeforePayment()
    simPlan.PaymentFailed()
  })
})