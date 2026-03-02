import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
const totalHeight = await page.evaluate(() => document.body.scrollHeight);

// Hero + header closeup
await page.screenshot({ path: 'temporary screenshots/final-hero.png', clip: { x: 0, y: 0, width: 1440, height: 700 } });
// Footer
await page.screenshot({ path: 'temporary screenshots/final-footer.png', clip: { x: 0, y: totalHeight - 600, width: 1440, height: 600 } });
console.log('Done, total height:', totalHeight);
await browser.close();
