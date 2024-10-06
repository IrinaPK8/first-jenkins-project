import { test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
    let actualTitle = await page.title();
    console.log(actualTitle);
    
});


test("Getting the current URL of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
    let currentUrl = page.url();
    console.log(currentUrl);
});


test("Set the window size", async ({ page }) => {
    // lets set window size BEFORE we open it
    //.setViewportSize() - accept args ({width: ..., height: ...})
    await page.setViewportSize({width: 1900, height: 1080});
    await page.goto("https://practice.cydeo.com");
    
    // window size can be included in Global Config to be applied to all tests
});




