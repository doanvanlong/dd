// index.js
const express = require('express');
const puppeteer = require('puppeteer-core');

const app = express();

app.use(express.json());

app.post('/api/clickButton', async (req, res) => {
  const { buttonSelector, url } = req.body;
  try {
    const browser = await puppeteer.launch({
      // Cấu hình Puppeteer Core để chạy trên Vercel
      executablePath: 'chrome.exe', // Đường dẫn đến Chrome (hoặc Chromium) executable trên Vercel
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto(url);

    await page.click(buttonSelector);

    // Lấy dữ liệu sau khi click
    const clickedData = await page.evaluate(() => {
      // Đoạn mã JavaScript để lấy dữ liệu từ trang web sau khi click
      // Ví dụ: trả về title của trang
      return document.title;
    });

    await browser.close();

    res.json({ success: true, clickedData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
