import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('E2E: User can complete checkout successfully', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  // 1. Login
  await login.login('standard_user', 'secret_sauce');

  // 2. Add Item & Go to Cart
  await inventory.addFirstItemAndGoToCart();

  // 3. Checkout Flow
  await checkout.proceedToCheckout();
  await checkout.fillShippingDetails('Worawit', 'Cha', '20130');
  await checkout.finishOrder();

  // 4. Assertion (ตรวจสอบผลลัพธ์)
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});