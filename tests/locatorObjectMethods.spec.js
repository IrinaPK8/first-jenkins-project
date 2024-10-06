import { test } from '@playwright/test';

test.describe('Test Group', () => {

  test.beforeEach (async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
      });


  test('Check() checks radio button and check boxes', async ({ page }) => {
    // if it is already checked - no action will happen, will stay checked
    let checkboxesLink = page.locator("text='Checkboxes'");   
    await checkboxesLink.click();
    let checkBox1 = page.locator("#box1");
    await checkBox1.check();
  });


  test('Uncheck() unchecks radio button and check boxes', async ({ page }) => {
    // if it is already unchecked - no action will happen, will stay unchecked
    let checkboxesLink = page.locator("text='Checkboxes'");   
    await checkboxesLink.click();
    let checkBox2 = page.locator("#box2");
    await checkBox2.uncheck();
  });

  test('selectOption() is used for dropdowns', async ({ page }) => {
    await page.locator("//a[@href='/dropdown']").click();

    let simpleDropDown =page.locator("//select[@id='dropdown']");

    // select by VALUE ATTRIBUTE - .selectOption("valueAttribute")
    // await simpleDropdown.selectOption("1");

    // select by VISIBLE TEXT (label)
    // await simpleDropdown.selectOption({label: "Option 1"});

    // select by INDEX
    await simpleDropDown.selectOption({index: 1});

  });




  /*test('innerText() gets visible text', async ({ page }) => {

    // get visible text value of element - .innerText()
    let headerElement = page.locator("//span[@class='h1y']");
    let actualText = await headerElement.innerText();
    console.log(actualText);
  });*/


 /* test('inputValue() only works with <input> <textare> <select>', async ({ page }) => {
    // .scrollIntoViewIfNeeded - use if need to see an actual scrolling
    // scrolling is unnecessary since Playwright does scrolling automatically
   let inputsLink = page.getByText("Inputs");
      await inputsLink.click();
      let inputBox = page.locator("//input[@type='number']");
      await page.waitForTimeout(3000);
      await inputBox.fill("123");
      await page.waitForTimeout(3000);
      let inputValue = await inputBox.inputValue();
      console.log(inputValue);
       });  */

    
      });




