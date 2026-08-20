import { test , expect } from "../Fixtures/productsPageFixture.js"
//import {ProductsPage} from "../pages/productsPage.js"
    test.describe("Testing Products Page", () => {
    test("Verify Product Information" , async({productsPage}) => {
    await productsPage.launchApplication();
    await productsPage.verifyproductInformation();
})
    test.only("Verify Product Managemet" , async({productsPage})=>{
        await productsPage.launchApplication();
        await productsPage.verifyProductManagemet();
    })
})
