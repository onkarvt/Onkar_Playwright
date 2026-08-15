import { test as base, expect } from '@playwright/test';
import { DashboardPage } from "../pages/dashboardPage.js"

export const test = base.extend({
    dashboardPage : async ({page} , use) => {
        await use (new DashboardPage(page))
    }
})
export { expect };