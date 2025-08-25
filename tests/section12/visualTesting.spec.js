const {test, expect} = require('@playwright/test');


test('Visual Testing', async ({ page }) => {
    

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').screenshot({path: 'screenshot2.png'});
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    await page.screenshot({path: 'screenshot.png'});
    
});

test.only('Visual Testing2', async ({ page }) => {

    //naviagate to google
    await page.goto('https://google.com');

    expect(await page.screenshot()).toMatchSnapshot('google.png');
})

