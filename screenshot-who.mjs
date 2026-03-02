import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
const totalHeight = await page.evaluate(() => document.body.scrollHeight);
// Who we are section - around 3600-4200px
await page.screenshot({ path: 'temporary screenshots/ss-who2.png', clip: { x: 0, y: 3600, width: 1440, height: 700 } });
console.log('Total:', totalHeight);
await browser.close();
