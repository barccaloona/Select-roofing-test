import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });

// Header zoom
await page.screenshot({ path: 'temporary screenshots/zoom-header.png', clip: { x: 0, y: 0, width: 1440, height: 120 } });
// Why Choose Us section
await page.screenshot({ path: 'temporary screenshots/zoom-why.png', clip: { x: 0, y: 1700, width: 1440, height: 1400 } });
console.log('Done');
await browser.close();
