 /* eslint-disable @typescript-eslint/quotes */

 class MainPage {
  get doneKeyBtn(){
    return $("~keyboard-done-button")
  }

   public getElement(element: string): WebdriverIO.Element {
     return $(element);
  }

   public getAllElements(element: string): WebdriverIO.ElementArray {
     return $$(element);
   }

   public getListSize(element: string): number {
     return this.getAllElements(element).length;
   }

   public getPageHTML(element: string): void {
    return this.getElement(element).getHTML();
   }

  public getElementByIndex(element: string, index: number): WebdriverIO.Element {
     return this.getAllElements(element)[index];
   }

   public isElementDisplayed(element: string): boolean {
     return this.getElement(element).isDisplayed();
   }

   public isElementClickable(element: string): boolean {
     return this.getElement(element).isClickable();
   }

   public isElementByIndexDisplayed(element: string, index: number): boolean {
     return this.getElementByIndex(element, index).isDisplayed();
   }

   public isElementByIndexClickable(element: string, index: number): boolean {
     return this.getElementByIndex(element, index).isClickable();
   }


   public waitUntilElementDisplayed(element: string): void {
     browser.waitUntil(() => {
       return this.isElementDisplayed(element);
     });
   }

   public waitUntilElementByIndexDisplayed(element: string, index: number): void {
     browser.waitUntil(() => {
       return this.isElementByIndexDisplayed(element, index);
     });
  }

   public getElementText(element: string): string {
     this.waitUntilElementDisplayed(element);
     return this.getElement(element).getText();
   }

   public getElementByIndexText(element: string, index: number): string {
     this.waitUntilElementByIndexDisplayed(element, index);
     return this.getElementByIndex(element, index).getText();
   }

   public setElementInputValue(element: string, value: string): void {
     this.waitUntilElementDisplayed(element);
     this.getElement(element).setValue(value);
   }

   public setElementInputByIndexValue(element: string, index: number, value: string): void {
     this.waitUntilElementByIndexDisplayed(element, index);
     this.getElementByIndex(element, index).setValue(value);
   }

   public clickElement(element: string): void {
     this.waitUntilElementDisplayed(element);
    this.getElement(element).click();
   }

   public clickElementByIndex(element: string, index: number): void {
     this.waitUntilElementByIndexDisplayed(element, index);
     this.getElementByIndex(element, index).click();
   }

   public scrollElementIntoViewByIndex(element: string, index: number): void {
    this.getElementByIndex(element, index).scrollIntoView();
   }

   public scrollElementIntoView(element: string): void {
    this.getElement(element).scrollIntoView();
   }

   public clickDoneBtn(): void {
     browser.isAndroid ? 
     browser.touchAction({
       action: "tap",
       x: 950,
       y: 2100,
     }) :
     this.clickElement(this.doneKeyBtn);
   }

   public clickPhotoBtn(): void {
     browser.touchAction({
       action: "tap",
       x: 450,
       y: 1750,
     });
   }

  public clickPhotoBtnIos(): void {
      driver.touchAction({
       action: "tap",
       x: 200,
       y: 733,
     })
  }

   public clickUsePhotoBtnIos(): void {
     driver.touchAction({
       action: "tap",
       x: 375,
       y: 809,
     });
  }

   public clickUpdateSignatureBtn(): void {
     browser.touchAction({
       action: "tap",
       x: 250,
       y: 1400,
     });
   }

   public clickConfirmSignatureBtn(): void {
     browser.touchAction({
       action: "tap",
       x: 900,
       y: 1500,
     });
   }

   public clickConfirmSigningBtn(): void {
     browser.touchAction({
       action: "tap",
       x: 800,
       y: 500,
     });
   }

   public hideKeyboard(): void {
     browser.pressKeyCode(4);
   }

   public waitForAlert(): void {
     browser.waitUntil(() => {
       return browser.getAlertText() !== null;
     });
   }

   public waitNoAlert(): void {
     browser.waitUntil(() => {
       return browser.getAlertText() == null;
     });
   }

   public getAlertText(): string {
     if (browser.isMobile) {
       this.waitForAlert();
       return browser.getAlertText();
     }
   }

   public waitForAlertText(text: string): void {
     browser.waitUntil(() => {
       return browser.getAlertText().includes(text);
   });
   }

   public clickAcceptAlert(): void {
     if (browser.isMobile) {
       if (browser.isAndroid) {
         this.waitForAlert();
        browser.acceptAlert();
       }
       if (browser.isIOS) {
        this.waitForAlert();
         browser.dismissAlert();
       }
    }
   }

  public clickCancelAlert(): void {
    if (browser.isMobile) {
      if (browser.isAndroid) {
        this.waitForAlert();
        browser.dismissAlert();
      }
      if (browser.isIOS) {
        this.waitForAlert();
        browser.acceptAlert();
      }
    }
  }

  alertAction(text: string, action: string): void {
    this.waitForAlertText(text);
    if (action == "accept") {
      this.clickAcceptAlert();
    } else {
      this.clickCancelAlert();
    }
  }

  public clickAndroidBackBtn(): void {
    browser.pressKeyCode(4);
  }
}
export default new MainPage();
