// Problem Description
// Given a paragraph of words, capitalize the first character of each word and return the paragraph.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.

// Explanation
// Each word has it’s first character capitalized

// Constraints
// Length of paragraph < 100.

// The paragraph contains spaces, lowercase and uppercase characters.

function capitaliseBasic(paragraph) {
    let result=[]
    for (let i=0; i<paragraph.length; i++){
        let prevLetter = paragraph[i-1]? paragraph[i-1]:" "
        if(prevLetter===" " && paragraph[i]!==" "){
            result.push(paragraph[i].toUpperCase())
        } else{
            result.push(paragraph[i])
        }
    }

    return result
}

let result = capitaliseBasic("the quick Brown fox jumps over The lazy dog.");
  console.log(result.join(""));

  //tc=n, sc=n