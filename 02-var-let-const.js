
const browserVersion= "Chrome"; //global variable
function getBrowserversion()
{
    if(browserVersion.startsWith('C'))
    {
        //var browserversion = "Mac";
        let browserversion = "Firefox"; 
        console.log("Supported version");
        
       // console.log("Browserversion printed inside if Block " + browserversion);
    
    } 
    else 
    {
      console.log("Unsupported version");
      
    }
    
   console.log("Browserversion printed inside function but outside of if block " + browserversion); // Declared value inside the if block but print the value outside the if block but inside the function
} 
getBrowserversion();