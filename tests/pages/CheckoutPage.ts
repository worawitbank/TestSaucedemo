import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async proceedToCheckout() {
    await this.page.click('[data-test="checkout"]');
  }

  async fillShippingDetails(first: string, last: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }

  async finishOrder() {
    await this.page.click('[data-test="finish"]');
  }
}