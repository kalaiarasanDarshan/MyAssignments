// login to TestlaeafTap.com

import test from '@playwright/test'
test('login with CSS selector',async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(5000)
    const title= await page.title()
    console.log(title)
    await page.close()


})