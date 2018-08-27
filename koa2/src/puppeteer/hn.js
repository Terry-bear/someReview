const puppeteer = require('puppeteer');

// 下载pdf的demo
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'})
  await page.pdf({path: 'hn.pdf', format: 'A4'})

  await browser.close()
})()