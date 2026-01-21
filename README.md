# SauceDemo E2E Automation Framework By BANK

## Architecture
Framework is built on **Playwright (TypeScript)** 

1.  **Separation of Concerns:**
    * Test logic (`/tests/e2e`) is completely decoupled from UI implementation details (`/pages`).
    * This ensures that UI changes (e.g., locator updates) do not break the business logic of the tests.

2.  **Reliability & Stability:**
    * **Smart Selectors:** Utilization of `data-test` attributes to prevent brittleness caused by CSS/layout changes.
    * **Auto-waiting:** Elimination of hard-coded sleeps (`time.sleep`) in favor of Playwright's native auto-waiting mechanisms, ensuring tests are flaky-free and performant.

3.  **Scalability:**
    * The structure allows for easy expansion. New pages and scenarios can be added without refactoring the core foundation.

## Test Scope
The current suite covers the **End-to-End (E2E) Happy Path**:
1.  **Login:** Authentication with valid credentials.
2.  **Inventory:** Selecting a product and adding it to the cart.
3.  **Checkout:** Completing the shipping information and finalizing the order.
4.  **Verification:** Asserting the order confirmation message.

## Quick Start

**Prerequisites:** Node.js (v18+)

```bash
# 1. Clone the repository
git clone [https://github.com/worawitbank/TestSaucedemo.git](https://github.com/worawitbank/TestSaucedemo.git)
cd TestSaucedemo

# 2. Install dependencies
npm install
npx playwright install

# 3. Run Tests
npx playwright test          # Headless mode
npx playwright test --headed # Visual mode

# 4. Report
npx playwright show-report