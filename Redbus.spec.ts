import { chromium } from 'playwright';

(async () => {
  // Launch Edge browser (chromium is used for Edge in Playwright)
  const browser = await chromium.launch({headless: false});
  

  // Create a new browser context and page
  const page = await browser.newPage();

  // Navigate to the RedBus website
  await page.goto('https://www.redbus.in/');

  // Verify the page title
  const pageTitle = await page.title();
  console.log('Page Title:', pageTitle);
  if (pageTitle === 'RedBus - Online Bus Ticket Booking') {
    console.log('Title is correct!');
  } else {
    console.log('Title is incorrect!');
  }

  // Verify the current URL
  const currentURL = page.url();
  console.log('Current URL:', currentURL);
  if (currentURL === 'https://www.redbus.in/') {
    console.log('URL is correct!');
  } else {
    console.log('URL is incorrect!');
  }

  // Close the browser
  await browser.close();
});
