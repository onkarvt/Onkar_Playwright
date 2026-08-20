import {test ,expect} from "../Fixtures/dashboardPageFixture.js"
//import { DashboardPage } from "../Pages/dashboardPage.js"

test.describe("Testing Dashboard Page", () =>{
test("Quick Actions" , async({dashboardPage}) => {
await dashboardPage.launchApplication();
await dashboardPage.correctLogin();
await dashboardPage.verifyQuickActions();
})

test("Recent Customers" , async({dashboardPage}) =>{
await dashboardPage.launchApplication();
await dashboardPage.correctLogin();
await dashboardPage.verifyRecentCustomers();
})
}
)