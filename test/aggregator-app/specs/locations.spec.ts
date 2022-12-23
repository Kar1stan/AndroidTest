// import { expect } from "chai";
// import $ from "webdriverio/build/commands/browser/$";
// import CommonElements from "../pages/CommonElements";
// import Page from "../pages/Page";

// const commonElements = new CommonElements();
// const page = new Page();

// const invalidStorages = "111";
// const ssmcStorages = "123";
// const spiderdoorStorages = "132";

// const backToLocationsAlert = "You will need to plug in the location code again: 132";
// const loginToSsmcAlert = "If you are a current customer at this location please create an account first.";
// const locationAlert = "To help determine if you are at the storage facility in order to open a gate using a geofence.";

// const locationInput = 0;
// const inputIos = "~location-code";
// const locationTooltip = 0;
// const locationTooltipIos = "~location-code-label";
// const emailInput = 1;
// const emailInputIos = "~email-field";
// const rentPricingBtn = 0;
// const rentPricingBtnIos = "~rent-button";
// const textIos = "~location-code-label";

// const getHTML = '//html';

// const cancel = "cancel";
// const accept = "accept";

// const tooltipText = "Enter the Location code provided by management";

// const invalidLocationAndroid = "Location code is in-valid.";
// const invalidLocationdIos = "Customer is not found";


// function clickBackBtn(element: string): void {
//   driver.back(); //browser.back doesn't work for iOS
//   element == rentPricingBtnIos ? commonElements.alertAction(backToLocationsAlert, browser.isAndroid ? cancel : accept) :
//   commonElements.alertAction(backToLocationsAlert, browser.isAndroid ? accept : cancel);
//   commonElements.waitUntilButtonDisplayed(0, element);
// }

// function enterValue(index: number, elementIos: string, value: string) : void {
//   commonElements.clickInput(index, elementIos);
//   commonElements.setInputValue(index, elementIos, value);
//   commonElements.clickDoneBtn();
// }

describe("Check locations",  () => {
  after("reset application", () => {
    if (!process.env.bs) {
       browser.reset();
    }
  });

  it("Check location page defaults",() => {
     browser.pause(5000)
    //  expect(commonElements.isLogoDisplayed(locationTooltipIos)).true; //there is no valid logo locator by now
    //  expect(commonElements.isInputDisplayed(locationInput, inputIos)).true;
    //  expect(commonElements.getInputText(locationInput, inputIos)).equal("Ex: 1234...");
    //  expect(commonElements.isLabelDisplayed(locationTooltip, textIos )).true;
    //  expect(commonElements.getLabelText(locationTooltip, locationTooltipIos )).contain(tooltipText);
  });

//   xit("Check empty location", () => {
//     enterValue(locationInput, inputIos, "");
//     browser.isAndroid ? expect(commonElements.isInputDisplayed(locationInput, inputIos)).true :
//     commonElements.alertAction("Code cannot be empty.", accept);
//   });

//  xit("Check invalid location", () => {
//     enterValue(locationInput, inputIos, invalidStorages);
//     commonElements.alertAction(browser.isAndroid ? invalidLocationAndroid : invalidLocationdIos, accept);
//     });

//   xit("Check valid location", () => {
//     enterValue(locationInput, inputIos, spiderdoorStorages);
//     browser.isAndroid ? null :
//     (commonElements.alertAction(locationAlert, accept), commonElements.alertAction(loginToSsmcAlert, accept));
//     commonElements.waitUntilButtonDisplayed(rentPricingBtn, rentPricingBtnIos);
//     commonElements.waitUntilLogoDisplayed(rentPricingBtnIos); //there is no  valid logo locator for iOS
//   });

//   it("Change location", () => {
//     clickBackBtn(rentPricingBtnIos);
//     clickBackBtn(inputIos);
//     enterValue(locationInput, inputIos, spiderdoorStorages);
//     commonElements.waitUntilLogoDisplayed(rentPricingBtnIos);// there is no valid logo locator for iOS
//     commonElements.waitUntilInputDisplayed(emailInput, emailInputIos);
//   });
});
