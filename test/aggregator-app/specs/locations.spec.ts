import { expect } from "chai";
import $ from "webdriverio/build/commands/browser/$";
import CommonElements from "../pages/CommonElements.page";
import MainPage from "../pages/Main.page";
import 'dotenv/config'

const backToLocationsAlert = "You will need to plug in the location code again: 132";
const loginToSsmcAlert = "If you are a current customer at this location please create an account first.";
const locationAlert = "To help determine if you are at the storage facility in order to open a gate using a geofence.";

const emailInputIndex = 1;
const elementIndex=0;

const cancel = "cancel";
const accept = "accept";

const tooltipText = "Enter the Location code provided by management";

const invalidLocationAndroid = "Location code is in-valid.";
const invalidLocationdIos = "Customer is not found";


function clickBackBtn(element: string): void {
  driver.back(); //browser.back doesn't work for iOS
  element == CommonElements.rentPricingIosBtn ? CommonElements.alertAction(backToLocationsAlert, browser.isAndroid ? cancel : accept) :
  CommonElements.alertAction(backToLocationsAlert, browser.isAndroid ? accept : cancel);
  CommonElements.waitUntilButtonDisplayed(0, element);
}

function enterValue(index: number, elementIos: string, value: string) : void {
  CommonElements.clickInput(index, elementIos);
  CommonElements.setInputValue(index, elementIos, value);
  CommonElements.clickDoneBtn();
}

describe("Check locations",  () => {
  after("reset application", () => {
    if (!process.env.bs) {
       browser.reset();
    }
  });

  it("Should check location page defaults",() => {
     browser.pause(5000)
     expect(CommonElements.isLogoDisplayed(CommonElements.locationTooltipIos)).true; //there is no valid logo locator by now
     expect(CommonElements.isInputDisplayed(elementIndex, CommonElements.iosInput)).true;
     expect(CommonElements.getInputText(elementIndex, CommonElements.iosInput)).equal("Ex: 1234...");
     expect(CommonElements.isLabelDisplayed(elementIndex, CommonElements.textIos )).true;
     expect(CommonElements.getLabelText(elementIndex, CommonElements.locationTooltipIos )).contain(tooltipText);
  });

  xit("Should check empty location", () => {
    enterValue(elementIndex, CommonElements.iosInput, "");
    browser.isAndroid ? expect(CommonElements.isInputDisplayed(elementIndex, CommonElements.iosInput)).true :
    CommonElements.alertAction("Code cannot be empty.", accept);
  });

 xit("Should check invalid location", () => {
    enterValue(elementIndex, CommonElements.iosInput, process.env.INVALID_STORAGES!);
    CommonElements.alertAction(browser.isAndroid ? invalidLocationAndroid : invalidLocationdIos, accept);
    });

  xit("Should check valid location", () => {
    enterValue(elementIndex, CommonElements.iosInput, process.env.SPIDERDOOR_STORAGES!);
    browser.isAndroid ? null :
    (CommonElements.alertAction(locationAlert, accept), CommonElements.alertAction(loginToSsmcAlert, accept));
    CommonElements.waitUntilButtonDisplayed(elementIndex, CommonElements.rentPricingIosBtn);
    CommonElements.waitUntilLogoDisplayed(CommonElements.rentPricingIosBtn); //there is no  valid logo locator for iOS
  });

  it("Should change location", () => {
    clickBackBtn(CommonElements.rentPricingIosBtn);
    clickBackBtn(CommonElements.iosInput);
    enterValue(elementIndex, CommonElements.iosInput, process.env.SPIDERDOOR_STORAGES!);
    CommonElements.waitUntilLogoDisplayed(CommonElements.rentIosBtn);// there is no valid logo locator for iOS
    CommonElements.waitUntilInputDisplayed(emailInputIndex, CommonElements.emailInputIos);
  });
});
