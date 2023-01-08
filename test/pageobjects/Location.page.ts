import { ChainablePromiseElement } from 'webdriverio';

class LocationPage {
    get logoBtn(){
        return $("//*[contains(@resource-id, 'logo')]")
      }

      get doneKeyBtn(){
        return $("~keyboard-done-button")
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
    
     async fillLocation(location:string){
        await this.iosInput.waitForDisplayed({ timeout: 5000 });
        await this.iosInput.click();
        await this.iosInput.setValue(location);
        await this.doneKeyBtn.click();
      }

      async clickBackBtn(){
        driver.back();
      }

}

export default new LocationPage();
