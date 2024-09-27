function launchBrowser (browserName){
if (browserName == "Chrome"){ 
        console.log("Chrome Broswer");

    }
    else if (browserName == "Edge"){
        console.log("Edge Broswer");

    }
    else if (browserName == "Safari"){
        console.log("Safari Broswer");

    }
    else {
        console.log("Opera Browser");
    }


}
function runTests (testType){
    switch (testType){
        case "Sanity":
            console.log ("Sanity Testing ");
            break;
        case "Regression":
            console.log("Regression Testing ");
            break;
        case "Smoke":
            console.log("Smoke Testing ");
            break;
    }

}


launchBrowser();
runTests();