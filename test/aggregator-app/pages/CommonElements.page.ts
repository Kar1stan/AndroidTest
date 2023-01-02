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

   public async isLogoDisplayed(element: string){
    await browser.isAndroid ? this.isElementDisplayed(this.logoBtn) : 
    this.isElementDisplayed(this.logoBtnIos);
   }
  
   public async waitUntilLogoDisplayed(element: string){
    await browser.isAndroid ? this.waitUntilElementDisplayed(this.logoBtn) :
    this.waitUntilElementDisplayed(element); //another locator is used due to original locator doesn't work
   }


   public async sButtonDisplayed(index: number, iosBtn: string){
     await browser.isAndroid ? this.isElementByIndexDisplayed(this.btnIos, index) :
     this.isElementDisplayed(iosBtn);
   }

   public async waitUntilButtonDisplayed(index: number, btnIos: string){
     await browser.isAndroid ? this.waitUntilElementByIndexDisplayed(this.btnIos, index) :
     this.waitUntilElementDisplayed(btnIos);
   }

   public async getButtonText(index: number, element: string){
     await browser.isAndroid ? this.getElementByIndexText(this.btnIos, index) :
     this.getElementText(element);
   }

   public async clickButton(index: number, element: string){
    await browser.isAndroid ?  this.clickElementByIndex(this.btnIos, index) :
    this.clickElement(element);
   }

   public async isBtnClickable(index: number, element: string){
    await browser.isAndroid ? 
    this.isElementByIndexClickable(this.btnIos, index) :
    this.isElementClickable(element);
   }

   public async isRadioBtnDisplayed(index: number){
    await this.isElementByIndexDisplayed(this.radioButton, index);
   }

   public async waitUntilRadioBtnDisplayed(index: number){
    await this.waitUntilElementByIndexDisplayed(this.radioButton, index);
   }

   public async getRadioBtnText(index: number){
    await this.getElementByIndexText(this.radioButton, index);
   }

   public async clickRadioBtn(index: number){
    await this.clickElementByIndex(this.radioButton, index);
   }

   public async isInputDisplayed(index: number, element: string){
     await browser.isAndroid ? 
     this.isElementByIndexDisplayed(this.editTextInput, index) : 
     this.isElementDisplayed(element);
   }
  
   public async waitUntilInputDisplayed(index: number, element: string){
     await browser.isAndroid ? this.waitUntilElementByIndexDisplayed(this.editTextInput, index) :
     this.waitUntilElementDisplayed(element);
   }

   public async getInputText(index: number, element: string){
     await browser.isAndroid ?  
     this.getElementByIndexText(this.editTextInput, index) : 
     this.getElementText(element);
   }

   public async clickInput(index: number, element: string){
    await browser.isAndroid ? this.clickElementByIndex(this.editTextInput, index) : 
    this.clickElement(element);
   }


   public async scrollInputIntoView(index: number, element: string){
     await browser.isAndroid ? this.scrollElementIntoViewByIndex(this.editTextInput, index) : 
     this.scrollElementIntoView(element);
   }

   public async setInputValue(index: number, element: string, value: string){
     //this.scrollInputIntoView(index, element);
     await browser.isAndroid ? this.setElementInputByIndexValue(this.editTextInput, index, value) : 
     this.setElementInputValue(element, value);
    }

    public async isLinkDisplayed(index: number, element: string){
     await browser.isAndroid ? this.isElementByIndexDisplayed(this.textViewBtn, index) :
     this.isElementDisplayed(element);
    }

   public async waitUntilLinkDisplayed(index: number){
     await this.waitUntilElementByIndexDisplayed(this.textViewBtn, index);
   }

   public async getLinkText(index: number, element: string){
     await browser.isAndroid ? this.getElementByIndexText(this.textViewBtn, index) : 
     this.getElementText(element);
   }

   public async clickLink(index: number, element: string){
     await browser.isAndroid ? this.clickElementByIndex(this.textViewBtn, index) :
     this.clickElement(element); 
   }

   public async isLabelDisplayed(index: number, element: string){
     await browser.isAndroid ?  this.isElementByIndexDisplayed(this.textViewBtn, index) :   this.isElementDisplayed(element);
   }

   public async getLabelText(index: number, element: string){
     await browser.isAndroid ? this.getElementByIndexText(this.textViewBtn, index) :
     this.getElementText(element);
   }

   public async waitUntilHeaderDisplayed(element: string){
     await browser.isAndroid ? this.waitUntilElementDisplayed(this.groupViewBtn) :
     this.waitUntilElementDisplayed(element);
   }

   public async isHeaderTitleDisplayed(){
     await this.isElementByIndexDisplayed(this.textViewBtn, 0);
   }

   public async getHeaderTitleText(){
     await this.getElementByIndexText(this.textViewBtn, 0);
   }

   public async isToggleDisplayed(index: number, element: string){
     await browser.isAndroid ?  this.isElementByIndexDisplayed(this.toggleBtn, index) :
     this.isElementDisplayed(element);
   }

   public async waitUntilToggleDisplayed(index: number, element: string){
    await browser.isAndroid ? this.waitUntilElementByIndexDisplayed(this.toggleBtn, index) :
    this.waitUntilElementDisplayed(element);
   }

   public async isHomeIconDisplayed(){
    await browser.isAndroid ?  this.isElementDisplayed(this.homeIconBtn) :
    await this.isElementDisplayed(this.homeIconIosBtn);
   }

   public async waitUntilHomeIconDisplayed(){
    await this.waitUntilElementDisplayed(this.homeIconBtn);
   }

   public async clickHomeIcon(){
     await browser.isAndroid ? this.clickElement(this.homeIconBtn) :
     this.clickElement(this.homeIconIosBtn);
   }

   public async takePhoto(){
     if (browser.isAndroid) {
     browser.pause(1000)
     await this.clickPhotoBtn()
     browser.pause(1000)
     await this.clickPhotoBtn()
     }else {
     browser.pause(4000)
     await this.clickPhotoBtnIos()
     browser.pause(4000)
     await this.clickUsePhotoBtnIos()     }
   }

   public async isHeaderBackButtonDisplayed(){
     await browser.isAndroid ?  this.isElementDisplayed(this.backBtn) :
     this.isElementDisplayed(this.backIosBtn);
   }

   public async waitUntilHeaderBackButtonDisplayed(){
     await browser.isAndroid ? this.waitUntilElementDisplayed(this.backBtn) :
     this.waitUntilElementDisplayed(this.backIosBtn);
   }

   public async clickHeaderBackButton(){
    await browser.isAndroid ? this.clickElement(this.backBtn) : 
    this.clickElement(this.backIosBtn);
   }
 }
export default new CommonElements();