import homeObjects from "../page-objects/home"

class simPlan {

    Click7DaysSimPlan(){
    cy.visit('');
    homeObjects.homePage.imgLogo().should('be.visible')
    homeObjects.homePage.lnkSimPlans().realHover()
    cy.contains('7 day SIM plans').click()
    homeObjects.homePage.imgBanner().should('be.visible')
    }

    Landing7DaysSimPlanPage(){
    cy.url().should('eq', 'https://www.amaysim.com.au/sim-plans/7-day-sim-plans')

    //check h1 7 day sim plans
    cy.get('.breadcrumb').should('be.visible').contains('7 Day SIM Plans')
    cy.get('h1').should('have.text', '7 Day SIM Plans')
    cy.get('.product-card').should('be.visible')
    cy.get('.product-card-top').contains('10GB')
    cy.get('.product-card-top--right > .font-heading').should('have.text', '$10')
    cy.get('.product-card-bottom').should('be.visible')
    cy.get('.product-card-inclusions > li').should('have.length', 4)
    cy.get('.product-card-ctas > .btn').should('be.visible').click()
    }

    Cart7DaysSimPlan(){
    cy.url().should('eq', 'https://www.amaysim.com.au/mobile/cart/7-day-10gb')
    cy.get('.css-1cwdk8u').should('be.visible')
    cy.get('#product-header-name-desktop').should('have.text', 'UNLIMITED 10GB')
    cy.get('#product-header-price-desktop').should('have.text', '$10/7 days')
    cy.get('.css-1e1ofua').should('have.length', 7)
    cy.get('#product-mobile-number').should('be.visible')
    cy.get('.css-14b8rqd > .css-15xa8x').click()
    cy.get('.css-y5ibac').should('be.visible')
    cy.get('.css-1tc4tuw > :nth-child(7)').should('have.text', 'choose your type of SIM')
    cy.get('.css-1vy9u2m').should('be.visible').contains('Physical SIM')
    cy.get('.css-1vy9u2m > .css-121rspz > .css-1ne7y3i > .css-pklavn').should('have.attr', 'checked', 'checked')
    }

    YourOrder7DaysSimPlan(){
    cy.get('.css-11molwp').should('be.visible')
    cy.get('.css-11r7le4').should('not.exist')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(1) > .css-1xvcvvf > :nth-child(1) > .css-15ld20a > .css-176y7cu').should('have.text', 'UNLIMITED 10GB')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(1) > .css-1xvcvvf > :nth-child(2) > [data-testid="cart-summary-product-price"] > .css-176y7cu').should('have.text', '$10.00')
    cy.get('.css-120lj27 [data-testid="product-cis-link-cart-summary"]').should('be.visible')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(2) > .css-1xvcvvf > :nth-child(1) > [data-testid="cart-summary-number-type"] > .css-176y7cu').should('have.text', 'New number')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(2) > .css-1xvcvvf > :nth-child(2) > [data-testid="cart-summary-number-price"] > .css-176y7cu').should('have.text', 'Free')
    cy.get('.css-120lj27 [data-testid="cart-summary-selected-number"]').should('be.visible')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(3) > .css-1xvcvvf > :nth-child(1) > .css-15ld20a > .css-176y7cu').should('have.text', 'Standard delivery')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(3) > .css-1xvcvvf > :nth-child(2) > [data-testid="cart-summary-delivery-price"] > .css-176y7cu').should('have.text', 'Free')
    cy.get('.css-120lj27 [data-testid="cart-summary-delivery-description"]').should('be.visible')
    cy.get('.css-120lj27 .css-13m7t4a').should('have.length', 2)
    cy.get('.css-120lj27 .css-13m7t4a').eq(0).should('contain', 'Pay today')
    cy.get('.css-120lj27 .css-13m7t4a').eq(1).should('contain', '$10.00')
    cy.get('[data-testid="product-checkout-button"]').click()   
    }

    Checkout7DaysSimPlan(){
    cy.get('.css-11molwp').should('be.visible')
    cy.get('.css-11r7le4').should('not.exist')
    cy.get('#already-with-amaysim-header-name').should('be.visible')
    cy.get('.css-1ohxdt3 > :nth-child(1)').should('have.text', `I'm a new customer`)
    cy.get('.css-1ohxdt3 > :nth-child(1) .css-pklavn').should('have.attr', 'checked', 'checked')
    }

    AboutYou7DaysSimPlan(){
    cy.get('#about-you-header-name').should('be.visible')
    cy.get('.css-in3yi3').should('be.visible')
    cy.get('#card-customer > :nth-child(1) > :nth-child(2) > :nth-child(2)').should('be.visible')
    cy.get('.css-1voa6x5').should('be.visible')
    cy.get('[data-first-name]').type('Test')  //first name
    cy.get('[data-last-name]').type('Test')  //last name
    cy.get('.css-1umejtx:contains("date of birth")').should('be.visible')
    cy.get('[data-dob]').type('09/09/1999')  //dob
    cy.get('.css-1umejtx:contains("email address")').should('be.visible')
    cy.get('[data-email-address]').type('testuser@mail.com')  //email
    cy.get('.css-1umejtx:contains("create a password")').should('be.visible')
    cy.get('.css-10odqxc:contains("characters")').should('be.visible')
    cy.get('[data-password]').type('@may$1m123')  //password
    cy.get('.css-1umejtx:contains("contact number")').should('be.visible')
    cy.get('.css-10odqxc:contains("anything urgent")').should('be.visible').contains(`We'll be in touch on this number for anything urgent`)
    cy.get('[data-contact-number]').type('0423456789')  //contact number
    }

    Delivery7DaysSimPlan(){
    cy.get('[data-testid="delivery-address"]').should('be.visible')
    cy.get('.css-1umejtx:contains("home or work address")').should('be.visible')
    cy.get('[class="react-autosuggest__input"]').type('Level 6, 17-19 Bridge St, SYDNEY NSW 2000')  //address
    cy.get('[data-suggestion-index="0"]').click()
    cy.get('.css-h94jr5').should('be.visible')
    cy.get('.css-h94jr5 > .css-1u4x94i > .css-1ne7y3i > .css-1cnc2pd').should('be.visible').contains('My residential address is the same as my delivery address')
    cy.get('[name="deliveryAddressIsHomeAddress"]').should('have.attr', 'checked', 'checked')
    }

    Payment7DaysSimPlan(){
    cy.get('#payments-header-name').should('be.visible').contains('payments')
    cy.get('.css-qib644').should('be.visible').contains(`We'll use this payment method for your ongoing renewals. You can update it at any time by going into your account.`)
    cy.get('.css-1u4x94i > .css-17w76e').should('be.visible')
    cy.get('.css-bnyk9p >> .css-1cnc2pd').should('have.length', 2)
    cy.get('.css-bnyk9p >> .css-1cnc2pd').eq(0).should('have.text', 'Credit or Debit card')
    cy.get('.css-bnyk9p >> .css-1cnc2pd').eq(1).should('have.text', 'PayPal')
    cy.get('.css-bnyk9p >> .css-1cnc2pd').eq(0).click()
    cy.get('[data-payment-type]').eq(0).should('have.attr', 'checked', 'checked')
    cy.get('.css-c5g9lg > .css-1u4x94i > .css-1ne7y3i > .css-1cnc2pd').should('be.visible').contains('I acknowledge that I have read and agree to amaysim')
    cy.get('#defaultAddtlTnC').should('be.visible').contains('By purchasing this product, you acknowledge that we are required by law to confirm your identity and residential address before activating your amaysim Service.')
    cy.get('.css-c5g9lg .css-1417z9a').click()
    cy.get('[data-continue-to-payment-button]').click()
    }

    CardPayment7DaysSimPlan(){
    cy.get('.css-11molwp').should('be.visible')
    cy.get('.css-11r7le4').should('not.exist')
    cy.get('#payment-header-name').should('be.visible').contains('secure payment')
    cy.get('.css-1umejtx:contains("card number")').should('be.visible')
    cy.wait(10000)
    const customerData = {
      cardNumber: '4242424242424242',
      expDate: '01/27',
      cvv: '123',
    };
    cy.get('[data-cy="cardnumber"]').realClick().realType(customerData.cardNumber)
    cy.get('.css-1umejtx:contains("expiry date")').should('be.visible')
    cy.get('[data-cy="expiry"]').realClick().realType(customerData.expDate)
    cy.get('.css-1umejtx:contains("security code")').should('be.visible')
    cy.get('[data-cy="cvc"]').realClick().realType(customerData.cvv)
    }

    VerifyOrderBeforePayment(){
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(1) > .css-1xvcvvf > :nth-child(1) > .css-15ld20a > .css-176y7cu').should('have.text', 'UNLIMITED 10GB')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(1) > .css-1xvcvvf > :nth-child(2) > [data-testid="cart-summary-product-price"] > .css-176y7cu').should('have.text', '$10.00')
    cy.get('.css-120lj27 [data-testid="product-cis-link-cart-summary"]').should('be.visible')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(2) > .css-1xvcvvf > :nth-child(1) > [data-testid="cart-summary-number-type"] > .css-176y7cu').should('have.text', 'New number')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(2) > .css-1xvcvvf > :nth-child(2) > [data-testid="cart-summary-number-price"] > .css-176y7cu').should('have.text', 'Free')
    cy.get('.css-120lj27 [data-testid="cart-summary-selected-number"]').should('be.visible')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(3) > .css-1xvcvvf > :nth-child(1) > .css-15ld20a > .css-176y7cu').should('have.text', 'Standard delivery')
    cy.get('.css-120lj27 > :nth-child(1) > :nth-child(3) > .css-1xvcvvf > :nth-child(2) > [data-testid="cart-summary-delivery-price"] > .css-176y7cu').should('have.text', 'Free')
    cy.get('.css-120lj27 [data-testid="cart-summary-delivery-description"]').should('be.visible')
    cy.get('.css-120lj27 .css-13m7t4a').should('have.length', 2)
    cy.get('.css-120lj27 .css-13m7t4a').eq(0).should('contain', 'Pay today')
    cy.get('.css-120lj27 .css-13m7t4a').eq(1).should('contain', '$10.00')
    cy.get('.css-1cnc2pd > .css-qib644').should('be.visible').contains('I confirm that I am the card holder and understand that this credit card may be used to complete an identity check').click()
    cy.get('[data-testid="submit-button"]').click()
    }

    PaymentFailed(){
    cy.url().should('eq', 'https://www.amaysim.com.au/mobile/your-details?error=true')
    cy.get('.css-cqbrkr:contains("Credit Card payment failed")')
    }
}
export default new simPlan()