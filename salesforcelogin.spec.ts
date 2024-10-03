import { test,chromium } from "@playwright/test";
test('To login to salesforece',async () => {

const browserInstance = await chromium.launch({headless:false});
const browsercontext = await browserInstance.newContext();
const browserPage = await browsercontext.newPage();
await browserPage.goto("https://login.salesforce.com/");
const url = browserPage.url();
console.log("The Url of the Page is ${url}");
const title = browserPage.title();
console.log("The title of the page is ${title}");
})

