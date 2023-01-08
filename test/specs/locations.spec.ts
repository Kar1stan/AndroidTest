import LocationPage from '../pageobjects/Location.page'
import 'dotenv/config'

describe('Check locations', () => {
    const tooltipText = "Enter the Location code provided by management";
    const invalidLocationAndroid = "Location code is in-valid.";

    it('Should check location page defaults', async () => {
        await (LocationPage.locationTooltipIos).waitForDisplayed({ timeout: 5000 });
        await expect(LocationPage.locationTooltipIos).toBeDisplayed();//there is no valid logo locator by now
        await expect(LocationPage.iosInput).toBeDisplayed();
        await expect(LocationPage.iosInput).toHaveValue("Ex: 1234...");
        await expect(LocationPage.textIos).toBeDisplayed();
        await expect(LocationPage.locationTooltipIos).toHaveText(tooltipText);
    })

    it("Should check empty location", async () => {
        await LocationPage.fillLocation("");
        await expect(LocationPage.iosInput).toBeDisplayed();  
    });

    it("Should check invalid location", async () => {
        await LocationPage.fillLocation(process.env.INVALID_STORAGES!);
        await console.log(invalidLocationAndroid)
    });

    it("Should check valid location", async () => {
        await LocationPage.fillLocation(process.env.SPIDERDOOR_STORAGES!);
        await expect(LocationPage.rentPricingIosBtn).toBeDisplayed();
      });

    it("Should change location", async () => {
        await LocationPage.clickBackBtn();
        await LocationPage.fillLocation(process.env.SPIDERDOOR_STORAGES!);
        await expect(LocationPage.emailInputIos).toBeDisplayed();
    });
})


