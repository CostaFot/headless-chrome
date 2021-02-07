const puppeteer = require('puppeteer')

async function getBunnies() {
    const browser = await puppeteer.launch({
            headless: false,
            executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
            userDataDir: "C:\\Users\\costa.fotiadis\\AppData\\Local\\Google\\Chrome\\User Data",
            defaultViewport: null
        }
    );

    const page = await browser.newPage();
    const url = "https://stackoverflow.com/questions/55267465/puppeteer-launch-a-new-tab-in-current-window-not-new-window"
    await page.goto(url).catch()
}


getBunnies().then(r => {
});