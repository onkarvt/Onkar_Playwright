import {test as base, expect } from "@playwright/test";
import { ProductsPage } from "../pages/productsPage.js"

// Inside your fixture file

export const test = base.extend({
    productsPage : async ({page}, use)=> {
        // Use the 'new' keyword to instantiate the class
        await use(new ProductsPage(page));
    }
});

export {expect}