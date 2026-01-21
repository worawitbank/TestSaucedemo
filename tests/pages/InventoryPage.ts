import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly firstItemAddButton: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // เลือกสินค้าชิ้นแรก (ใช้ selector ที่ขึ้นต้นด้วย add-to-cart)
    this.firstItemAddButton = page.locator('[data-test^="add-to-cart"]').first();
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addFirstItemAndGoToCart() {
    await this.firstItemAddButton.click();
    await this.cartLink.click();
  }
}