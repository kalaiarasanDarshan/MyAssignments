// Assignment Details:  
// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
// `runTests` with `switch` for test type messages. 
 
// Assignment Requirements:  
// Create two functions : launchBrowser, runTests where, 
//     a) launchBrowser need to take input as browserName (string) and do not return any 
//         - use if-else (chrome or otherwise) 
//         - Print the value 
//     b) runTests need to take input as testType (string) and do not return any  
//         - use switch case (smoke, sanity, regression, default (smoke)) 
//         - Print the values 
// Call that function from the javascript

function launchBrowser(browserName){
    if(browserName==="Edge"){
        console.log("Edge browser launches successfully")
        }else if(browserName==="Chrome"){
            console.log("Chrome browser launches successfully")
        }else if(browserName==="Opera"){
            console.log("Opera browser launches successfully")
        }else if(browserName===" Firefox"){
            console.log("Firefox browser launches successfully")
        }else{
            console.log("DuckDuckGo browser launches successfully")
        }
        console.log(browserName)
}
launchBrowser("DuckDuckGo")
