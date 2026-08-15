import {test, expect} from "../Fixtures/loginPageFixture.js"
import { LoginPage } from "../Pages/loginPage.js"

test.describe("Launch application with correct creds", () => {
    test ("Correct Login", async({loginPage}) => {
        await loginPage.launchApplication();
        await loginPage.correctLogin();
        await loginPage.verifyLoginSuccesful()
    })

    test.only("Incorrect login", async({loginPage}) =>{
        await loginPage.launchApplication();
        await loginPage.failedLogin();
       await loginPage.getErrorMessage();
    }
)
})