const {test, expect} = require('@playwright/test');

test.only("Assignment4_Calander", async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

    const month = "05";
    const day = "30";
    const year = "2023";

    const ExpectedList = [month, day, year];

    await page.locator(".react-date-picker.react-date-picker--closed").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();

    await page.locator(".react-calendar__year-view__months__month").nth(Number(month) - 1).click();
    await page.locator("//abbr[text()='"+day+"']").click();

    //calander validation

    const inputs=await page.locator(".react-date-picker__wrapper input");
    console.log(inputs);

    for (let i=0;i<inputs.length;i++)
    {
        const value=inputs[i].getAttribute("value");
        console.log(value);
        expect(value).toEqual(ExpectedList[i]);
    }

})