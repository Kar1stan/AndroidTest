// import Page from "./Page";

// const logo = "//*[contains(@resource-id, 'logo')]";
// const logoIos = "~logo"; //locator doesn't work
// const input = "//android.widget.EditText";
// const text = "//android.widget.TextView";
// const btn = "//android.widget.Button";
// const rentPricingIosBtn = "~rent-button";
// const group = "//android.view.ViewGroup";
// const rbt = "//android.widget.RadioButton";
// const toggle = "//android.widget.Switch";
// const homeIcon = "//android.widget.ImageButton";
// const homeIconIos = "~home-button";
// const backBtn = "//android.widget.ImageButton[@content-desc]";
// const backBtnIos = "~back-button";

// export default class CommonElements extends Page {
  
//   public isLogoDisplayed(logoIos: string): boolean {
//     return browser.isAndroid ? this.isElementDisplayed(logo) : 
//     this.isElementDisplayed(logoIos);
//   }
  
//   public waitUntilLogoDisplayed(element: string): void {
//     browser.isAndroid ? this.waitUntilElementDisplayed(logo) :
//     this.waitUntilElementDisplayed(element); //another locator is used due to original locator doesn't work
//   }


//   public isButtonDisplayed(index: number, iosBtn: string): boolean {
//     return browser.isAndroid ? this.isElementByIndexDisplayed(btn, index) :
//     this.isElementDisplayed(iosBtn);
//   }

//   public waitUntilButtonDisplayed(index: number, btnIos: string): void {
//     browser.isAndroid ? this.waitUntilElementByIndexDisplayed(btn, index) :
//     this.waitUntilElementDisplayed(btnIos);
//   }

//   public getButtonText(index: number, element: string): string {
//     return browser.isAndroid ? this.getElementByIndexText(btn, index) :
//     this.getElementText(element);
//   }

//   public clickButton(index: number, element: string): void {
//    browser.isAndroid ?  this.clickElementByIndex(btn, index) :
//    this.clickElement(element);
//   }

//   public isBtnClickable(index: number, element: string): boolean {
//   return  browser.isAndroid ? 
//   this.isElementByIndexClickable(btn, index) :
//   this.isElementClickable(element);
//   }

//   public isRadioBtnDisplayed(index: number): boolean {
//     return this.isElementByIndexDisplayed(rbt, index);
//   }

//   public waitUntilRadioBtnDisplayed(index: number): void {
//     this.waitUntilElementByIndexDisplayed(rbt, index);
//   }

//   public getRadioBtnText(index: number): string {
//     return this.getElementByIndexText(rbt, index);
//   }

//   public clickRadioBtn(index: number): void {
//     this.clickElementByIndex(rbt, index);
//   }

//   public isInputDisplayed(index: number, element: string): boolean {
//     return browser.isAndroid ? 
//     this.isElementByIndexDisplayed(input, index) : 
//     this.isElementDisplayed(element);
//   }
  
//   public waitUntilInputDisplayed(index: number, element: string): void {
//     browser.isAndroid ? this.waitUntilElementByIndexDisplayed(input, index) :
//     this.waitUntilElementDisplayed(element);
//   }

//   public getInputText(index: number, element: string): string {
//     return browser.isAndroid ?  
//     this.getElementByIndexText(input, index) : 
//     this.getElementText(element);
//   }

//   public clickInput(index: number, element: string): void {
//     browser.isAndroid ? this.clickElementByIndex(input, index) : 
//     this.clickElement(element);
//   }


//   public scrollInputIntoView(index: number, element: string): void {
//     browser.isAndroid ? this.scrollElementIntoViewByIndex(input, index) : 
//     this.scrollElementIntoView(element);
//   }

//   public setInputValue(index: number, element: string, value: string): void {
//     //this.scrollInputIntoView(index, element);
//     browser.isAndroid ? this.setElementInputByIndexValue(input, index, value) : 
//     this.setElementInputValue(element, value);
//   }

//   public isLinkDisplayed(index: number, element: string): boolean {
//     return browser.isAndroid ? this.isElementByIndexDisplayed(text, index) :
//     this.isElementDisplayed(element);
//   }

//   public waitUntilLinkDisplayed(index: number): void {
//     this.waitUntilElementByIndexDisplayed(text, index);
//   }

//   public getLinkText(index: number, element: string): string {
//     return browser.isAndroid ? this.getElementByIndexText(text, index) : 
//     this.getElementText(element);
//   }

//   public clickLink(index: number, element: string): void {
//     browser.isAndroid ? this.clickElementByIndex(text, index) :
//     this.clickElement(element); 
//   }

//   public isLabelDisplayed(index: number, element: string): boolean {
//     return browser.isAndroid ?  this.isElementByIndexDisplayed(text, index) :
//     this.isElementDisplayed(element);

//   }

//   public getLabelText(index: number, element: string): string {
//     return browser.isAndroid ? this.getElementByIndexText(text, index) :
//     this.getElementText(element);
//   }

//   public waitUntilHeaderDisplayed(element: string): void {
//     browser.isAndroid ? this.waitUntilElementDisplayed(group) :
//     this.waitUntilElementDisplayed(element);
//   }

//   public isHeaderTitleDisplayed(): boolean {
//     return this.isElementByIndexDisplayed(text, 0);
//   }

//   public getHeaderTitleText(): string {
//     return this.getElementByIndexText(text, 0);
//   }

//   public isToggleDisplayed(index: number, element: string): boolean {
//     return browser.isAndroid ?  this.isElementByIndexDisplayed(toggle, index) :
//     this.isElementDisplayed(element);
//   }

//   public waitUntilToggleDisplayed(index: number, element: string): void {
//    browser.isAndroid ? this.waitUntilElementByIndexDisplayed(toggle, index) :
//    this.waitUntilElementDisplayed(element);
//   }

//   public isHomeIconDisplayed(): boolean {
//     return browser.isAndroid ?  this.isElementDisplayed(homeIcon) :
//     this.isElementDisplayed(homeIconIos);

//   }

//   public waitUntilHomeIconDisplayed(): void {
//     this.waitUntilElementDisplayed(homeIcon);
//   }

//   public clickHomeIcon(): void {
//     browser.isAndroid ? this.clickElement(homeIcon) :
//     this.clickElement(homeIconIos);
//   }

//   public takePhoto(): void {
//     if (browser.isAndroid) {
//     browser.pause(1000)
//     this.clickPhotoBtn()
//     browser.pause(1000)
//     this.clickPhotoBtn()
//     }else {
//     browser.pause(4000)
//     this.clickPhotoBtnIos()
//     browser.pause(4000)
//     this.clickUsePhotoBtnIos()
//     }
//   }

//   public isHeaderBackButtonDisplayed(): boolean {
//     return browser.isAndroid ?  this.isElementDisplayed(backBtn) :
//     this.isElementDisplayed(backBtnIos);
//   }

//   public waitUntilHeaderBackButtonDisplayed(): void {
//     browser.isAndroid ? this.waitUntilElementDisplayed(backBtn) :
//     this.waitUntilElementDisplayed(backBtnIos);
//   }

//   public clickHeaderBackButton(): void {
//     browser.isAndroid ? this.clickElement(backBtn) : 
//     this.clickElement(backBtnIos);
//   }
// }
