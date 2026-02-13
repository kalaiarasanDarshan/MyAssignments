
// Your task is to launch two separate browser instances using Playwright:
// 1. Load Red Bus in an Edge browser instance and verify the page title and URL.
// 2. Load Flipkart in a Webkit browser instance and verify the page title and URL. 

import test,{chromium,webkit,expect} from '@playwright/test'

test('Launch Red Bus in Edge and Flipkart in WebKit', async()=>{
    
    //-------- Launch msedge Browser (Redbus) --------
    const browserEdge= await chromium.launch({channel:'msedge',headless:false})

    const browsertype= browserEdge.browserType().name();

    console.log("browserType of Red Bus :" +browsertype)

    const contextRedbus= await browserEdge.newContext()
    
    const pageRedbus = await contextRedbus.newPage()
    
    await pageRedbus.goto(" https://www.redbus.in")
    
    const titleRedbus=await pageRedbus.title()

    console.log("Tittle  :"+ titleRedbus)

    const urlRedbus= await pageRedbus.url()
    console.log("RedBus URL : "+ urlRedbus)
    await pageRedbus.close()
    

// -------- Launch WebKit Browser (Flipkart) --------

const  browserwebKit=(await webkit.launch({headless:false}))
const browserType= browserwebKit.browserType().name();

console.log("browserType of Flipkart :" +browserType)


const contextFlipkart=await browserwebKit.newContext()

const pageFlipkart= await contextFlipkart.newPage()

await pageFlipkart.goto("https://www.flipkart.com")

const titleFlipkart=await pageFlipkart.title()

console.log("Title :"  + titleFlipkart)

const urlFlipkart = await pageFlipkart.url();

console.log("Flipkart URL:" + urlFlipkart)
await pageFlipkart.close()

})

