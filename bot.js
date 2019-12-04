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
    await page.waitFor(5000)
    await page.click(`.g`);
    await page.waitFor(15000)
    

    const content = await page.evaluate(()=>{
        return document.getElementsByTagName('section')[1].innerText
    })
    console.log('check content', content)

    browser.close
})()