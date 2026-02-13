// 1. Navigate to the URL: http://leaftaps.com/opentaps/control/main
// 2. Enter the username as Demosalesmanager
// 3. Enter the password as crmsfa
// 4. Click the Login button
// 5. Click CRM/SFA
// 6. Click Leads
// 7. Click Create Lead
// 8. Fill the Company Name
// 9. Fill the First Name
// 10. Fill the Last Name
// 11. Fill the Salutation
// 12. Fill the Title
// 13. Fill the Annual Revenue
// 14. Fill the Department
// 15. Fill the Phone Number
// 16. Click Create Lead button

import test,{chromium,expect} from '@playwright/test'
test('Create a Lead', async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(5000)
    const title= await page.title()
    console.log("Title : " +title)
    await page.locator("#button").click();
    await page.waitForTimeout(3000)
    await page.locator("//*[text()='Leads']").click();
    await page.locator("(//*[text()='Create Lead'])[1]").click();
    await page.locator("#createLeadForm_companyName").fill("TestLeaf Institution")
    await page.locator("#createLeadForm_firstName").fill("Kalaiarasan")
    await page.locator("#createLeadForm_lastName").fill("Shanmugam")
    await page.locator("#createLeadForm_generalProfTitle").fill("Senior Automation Engineer")
    await page.locator("#createLeadForm_annualRevenue").fill("20000")
    await page.locator("#createLeadForm_departmentName").fill("Testing")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9345490089")
    await page.locator(".smallSubmit").click()
    await page.waitForTimeout(2000)


})