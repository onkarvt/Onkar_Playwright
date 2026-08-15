export class BasePage{
    constructor(page){
        this.page = page;
    }
async navigate(url){
    await this.page.goto(url)
}
async getTitle() {
   await this.page.title();
  }
 async waitForElement(locator) {
    await locator.waitFor({ state: 'visible' });
  }

  async click(locator) {
    await locator.click();
  }

  async fill(locator, text) {
    await locator.fill(text);
  }

  async isVisible(locator) {
    return await locator.isVisible();
  }
}
