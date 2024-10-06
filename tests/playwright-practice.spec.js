
// to use test() function - need to import it from @playwright/test first to use test function
import {test} from '@playwright/test';

test ("YouTube search", async ({page}) => {

    await page.goto("https://www.youtube.com/"); 

    let searchBox = await page.locator("//input[@id='search']");
    await searchBox.click();            // to place coursor to search field
    await searchBox.fill("Cydeo");
    await searchBox.press("Enter");     // why Enter is pased to () ????
    let firstResult = page.locator("(//a[@id='video-title'])[1]"); // change to unique locator
    await firstResult.click();

});


/*  
<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" 
name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Search" 
aria-label="Search" role="combobox" aria-haspopup="false" aria-autocomplete="list" 
dir="ltr" class="ytd-searchbox" style="outline: none;">
*/

/*
command: /xpath-locator

description: Generates the xpath of the given HTML

prompt-template (did not work for me, changed some wording): You are a web automation testing expert specializing in xpath generation.
Your task is to create a short and unique relative xpath locator for a given HTML code.
Use single quotes when you are giving the value of the attributes in the locator, avoid any escape sequences or double quotes.
Your response should contain only the unique and short xpath locator and nothing else.
*/

//input[@name='search_query']
