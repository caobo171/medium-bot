const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch({headless: false });
    const  page = await browser.newPage();


    await page.goto('https://google.com',{
        waitUntil: 'domcontentloaded'
    })

    await page.type('input[title]','Updating ApolloCLient cache and rerendering data Medium');
    // ENter
    await page.keyboard.press('Enter')
    await page.waitForNavigation({
        waitUntil: 'domcontentloaded'
    });

    await page.click(`.g`);
    await page.waitForNavigation({
        waitUntil: 'domcontentloaded'
    });
    console.log('aaa')
})()