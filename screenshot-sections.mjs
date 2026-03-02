import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

await page.screenshot({ path: 'temporary screenshots/ss-top.png', clip: { x: 0, y: 0, width: 1440, height: 1200 } });
await page.screenshot({ path: 'temporary screenshots/ss-mid.png', clip: { x: 0, y: 1200, width: 1440, height: 1200 } });
await page.screenshot({ path: 'temporary screenshots/ss-bot.png', clip: { x: 0, y: 2400, width: 1440, height: 1200 } });
await browser.close();
console.log('Done');
