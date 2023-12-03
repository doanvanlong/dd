const puppeteer = require('puppeteer-core');
fetch('http://localhost:3000/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ post_id: '12' }), // Dữ liệu bạn muốn gửi
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Lỗi:', error));

//   (async () => {
//     const executablePath =
//       "Google\\Chrome\\Application\\chrome.exe";
//     const browser = await puppeteer.launch({
//       headless: false,
//       defaultViewport: { width: 1920, height: 800 },
//       executablePath,
//     });
//     const page = await browser.newPage();
//     // Điều hướng đến trang web chứa nút "load more"
//     await page.goto(
//       "https://www.thegioididong.com/hoi-dap/chu-de/pc-laptop-macbook/windows-10"
//     );
//     try {
//       await page.waitForSelector(".viewmoreG", {
//         visible: true,
//       });
//       await page.click(".viewmoreG");
//     } catch (error) {
//       console.error("Không thể click vào nút Load More:", error);
//     }
//     // Chờ cho dữ liệu mới được tải (nếu có)
//     await page.waitForTimeout(3000); // Đợi 3 giây, bạn có thể thay đổi thời gian chờ tùy theo trang web
//     // Lấy nội dung của trang sau khi đã click vào nút Load More
//     const updatedPageContent = await page.content();
//     console.log(updatedPageContent);
//     // Đóng trình duyệt
//     await browser.close();
//   })();
  