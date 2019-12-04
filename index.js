const express = require('express')
const bodyParser = require('body-parser')
const puppeteer = require('puppeteer');

app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.post('/getpodcast',async (req,res)=>{
    const queryString = req.body.podcast
    const browser = await puppeteer.launch({headless: true });
    const  page = await browser.newPage();


    await page.goto('https://google.com',{
        waitUntil: 'domcontentloaded'
    })

    await page.type('input[title]',`${queryString} Medium`);
    // ENter
    await page.keyboard.press('Enter')
    await page.waitFor(4000)
    await page.click(`.g`);
    await page.waitFor(13000)
    

    const content = await page.evaluate(()=>{
        return document.getElementsByTagName('section')[1].innerText
    })
    console.log('check content', content)

    await browser.close()
    res.send(content)
})

app.listen(3000,()=>{
    console.log('app is listening !')
})

