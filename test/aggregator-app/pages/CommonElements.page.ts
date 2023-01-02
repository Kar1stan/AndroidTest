 import MainPage from "./Main.page";

 class CommonElements extends MainPage {
  get logoBtn(){
    return $("//*[contains(@resource-id, 'logo')]")
  }

  get logoBtnIos(){
    return $("~logo")
  }

  get btnIos(){
    return $("//android.widget.Button")
  }
  
  get radioButton(){
    return $("//android.widget.RadioButton")
  }

  get editTextInput(){
    return $("//android.widget.EditText")
  }

  get textViewBtn(){
    return $("//android.widget.TextView")
  }

  get groupViewBtn(){
    return $("//android.view.ViewGroup")
  }

  get toggleBtn(){
    return $("//android.widget.Switch")
  }

  get homeIconBtn(){
    return $("//android.widget.ImageButton")
  }

  get homeIconIosBtn(){
    return $("~home-button")
  }

  get backBtn(){
    return $("//android.widget.ImageButton[@content-desc]")
  }

  get backIosBtn(){
    return $("~back-button")
  }

  get rentIosBtn(){
    return $("~rent-button")
  }

  get iosInput(){
    return $("~location-code")
  }

  get locationTooltipIos(){
    return $("~location-code-label")
  }

  get emailInputIos(){
    return $("~email-field")
  }

  get rentPricingIosBtn(){
    return $("~rent-button")
  }

  get textIos(){
    return $("~location-code-label")
  }

   public isLogoDisplayed(logoIos: string): boolean {
     return browser.isAndroid ? this.isElementDisplayed(this.logoBtn) : 
     this.isElementDisplayed(this.logoBtnIos);
   }
  
   public waitUntilLogoDisplayed(element: string): void {
     browser.isAndroid ? this.waitUntilElementDisplayed(this.logoBtn) :
     this.waitUntilElementDisplayed(element); //another locator is used due to original locator doesn't work
   }


   public isButtonDisplayed(index: number, iosBtn: string): boolean {
     return browser.isAndroid ? this.isElementByIndexDisplayed(this.btnIos, index) :
     this.isElementDisplayed(iosBtn);
   }

   public waitUntilButtonDisplayed(index: number, btnIos: string): void {
     browser.isAndroid ? this.waitUntilElementByIndexDisplayed(this.btnIos, index) :
     this.waitUntilElementDisplayed(btnIos);
   }

   public getButtonText(index: number, element: string): string {
     return browser.isAndroid ? this.getElementByIndexText(this.btnIos, index) :
     this.getElementText(element);
   }

   public clickButton(index: number, element: string): void {
    browser.isAndroid ?  this.clickElementByIndex(this.btnIos, index) :
    this.clickElement(element);
   }

   public isBtnClickable(index: number, element: string): boolean {
   return  browser.isAndroid ? 
   this.isElementByIndexClickable(this.btnIos, index) :
   this.isElementClickable(element);
   }

   public isRadioBtnDisplayed(index: number): boolean {
     return this.isElementByIndexDisplayed(this.radioButton, index);
   }

   public waitUntilRadioBtnDisplayed(index: number): void {
     this.waitUntilElementByIndexDisplayed(this.radioButton, index);
   }

   public getRadioBtnText(index: number): string {
     return this.getElementByIndexText(this.radioButton, index);
   }

   public clickRadioBtn(index: number): void {
     this.clickElementByIndex(this.radioButton, index);
   }

   public isInputDisplayed(index: number, element: string): boolean {
     return browser.isAndroid ? 
     this.isElementByIndexDisplayed(this.editTextInput, index) : 
     this.isElementDisplayed(element);
   }
  
   public waitUntilInputDisplayed(index: number, element: string): void {
     browser.isAndroid ? this.waitUntilElementByIndexDisplayed(this.editTextInput, index) :
     this.waitUntilElementDisplayed(element);
   }

   public getInputText(index: number, element: string): string {
     return browser.isAndroid ?  
     this.getElementByIndexText(this.editTextInput, index) : 
     this.getElementText(element);
   }

   public clickInput(index: number, element: string): void {
     browser.isAndroid ? this.clickElementByIndex(this.editTextInput, index) : 
    this.clickElement(element);
   }


   public scrollInputIntoView(index: number, element: string): void {
     browser.isAndroid ? this.scrollElementIntoViewByIndex(this.editTextInput, index) : 
     this.scrollElementIntoView(element);
   }

   public setInputValue(index: number, element: string, value: string): void {
     //this.scrollInputIntoView(index, element);
     browser.isAndroid ? this.setElementInputByIndexValue(this.editTextInput, index, value) : 
     this.setElementInputValue(element, value);
    }

    public isLinkDisplayed(index: number, element: string): boolean {
     return browser.isAndroid ? this.isElementByIndexDisplayed(this.textViewBtn, index) :
     this.isElementDisplayed(element);
    }

   public waitUntilLinkDisplayed(index: number): void {
     this.waitUntilElementByIndexDisplayed(this.textViewBtn, index);
   }

   public getLinkText(index: number, element: string): string {
     return browser.isAndroid ? this.getElementByIndexText(this.textViewBtn, index) : 
     this.getElementText(element);
   }

   public clickLink(index: number, element: string): void {
     browser.isAndroid ? this.clickElementByIndex(this.textViewBtn, index) :
     this.clickElement(element); 
   }

   public isLabelDisplayed(index: number, element: string): boolean {
     return browser.isAndroid ?  this.isElementByIndexDisplayed(this.textViewBtn, index) :   this.isElementDisplayed(element);
   }

   public getLabelText(index: number, element: string): string {
     return browser.isAndroid ? this.getElementByIndexText(this.textViewBtn, index) :
     this.getElementText(element);
   }

   public waitUntilHeaderDisplayed(element: string): void {
     browser.isAndroid ? this.waitUntilElementDisplayed(this.groupViewBtn) :
     this.waitUntilElementDisplayed(element);
   }

   public isHeaderTitleDisplayed(): boolean {
     return this.isElementByIndexDisplayed(this.textViewBtn, 0);
   }

   public getHeaderTitleText(): string {
     return this.getElementByIndexText(this.textViewBtn, 0);
   }

   public isToggleDisplayed(index: number, element: string): boolean {
     return browser.isAndroid ?  this.isElementByIndexDisplayed(this.toggleBtn, index) :
     this.isElementDisplayed(element);
   }

   public waitUntilToggleDisplayed(index: number, element: string): void {
    browser.isAndroid ? this.waitUntilElementByIndexDisplayed(this.toggleBtn, index) :
    this.waitUntilElementDisplayed(element);
   }

   public isHomeIconDisplayed(): boolean {
    return browser.isAndroid ?  this.isElementDisplayed(this.homeIconBtn) :
    this.isElementDisplayed(this.homeIconIosBtn);
   }

   public waitUntilHomeIconDisplayed(): void {
     this.waitUntilElementDisplayed(this.homeIconBtn);
   }

   public clickHomeIcon(): void {
     browser.isAndroid ? this.clickElement(this.homeIconBtn) :
     this.clickElement(this.homeIconIosBtn);
   }

   public takePhoto(): void {
     if (browser.isAndroid) {
     browser.pause(1000)
     this.clickPhotoBtn()
     browser.pause(1000)
     this.clickPhotoBtn()
     }else {
     browser.pause(4000)
     this.clickPhotoBtnIos()
     browser.pause(4000)
     this.clickUsePhotoBtnIos()     }
   }

   public isHeaderBackButtonDisplayed(): boolean {
     return browser.isAndroid ?  this.isElementDisplayed(this.backBtn) :
     this.isElementDisplayed(this.backIosBtn);
   }

   public waitUntilHeaderBackButtonDisplayed(): void {
     browser.isAndroid ? this.waitUntilElementDisplayed(this.backBtn) :
     this.waitUntilElementDisplayed(this.backIosBtn);
   }

   public clickHeaderBackButton(): void {
    browser.isAndroid ? this.clickElement(this.backBtn) : 
     this.clickElement(this.backIosBtn);
   }
 }
export default new CommonElements();