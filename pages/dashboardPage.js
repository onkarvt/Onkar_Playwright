import {test , expect} from "@playwright/test"
import {BasePage} from "./basePage.js"

export class DashboardPage extends BasePage {

  constructor(page){
        super(page)
        this.page =page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton =  page.locator('#loginBtn');
        this.errorMessage = page.getByText('Invalid username or password.');
        this.quickActions = page.getByRole('heading', { name: 'Quick Actions' })
        this.recentCustomers =  page.getByText('Recent Customers')
    }

  async verifyLoginPageLoaded(){
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
     }
  async launchApplication(){
    await this.navigate("https://smarterp-wgaw.onrender.com/dashboard.html")
    }
  
    async login(username, password){
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async correctLogin(){
    await this.login("admin" , "admin123")
    }
 
  async failedLogin(){
    await this.login("tomsmith1" , "SuperSecretPassword!")
    }
  async verifyLoginSuccesful(){
      await expect (this.page).toHaveURL(/dashboard/i, {timeout : 10000})
   }
  async verifyQuickActions(){
    await expect(this.quickActions).toBeVisible();
  }

  async verifyRecentCustomers(){
    await expect(this.recentCustomers).toBeVisible();
  }
}