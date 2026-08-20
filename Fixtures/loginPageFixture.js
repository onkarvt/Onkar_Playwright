import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js'

export const test = base.extend({
    loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});
export { expect };


