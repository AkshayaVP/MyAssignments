function areAnagrams(str1, str2) {
    // Remove any non-alphanumeric characters and convert to uppercase
    const cleanStr1 = str1.trim().toUpperCase();
    const cleanStr2 = str2.trim().toUpperCase();
  
    // Sort the characters of both strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    // Compare the sorted strings
    if(sortedStr1 === sortedStr2)
    {
        return "The string is an Anagram";
    }
    else 
    {
      return "The string is not an Anagram";
    }
    
  }
// Example usage to check if it an anagram or not an anagram
console.log(areAnagrams("listen", "silent"));  // Output: true
console.log(areAnagrams("hello", "silent"));    // Output: false