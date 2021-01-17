
class StrangerStrings {

    getHelloWorld(){
        let firstSegment = "Hello";
        let secondSegment = "World";
        return `${firstSegment} ${secondSegment}`;
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        //get the first letter
        let firstLetter = input[0];

        //get the second letter
        let secondLetter = input[1];
        
        //get the third letter
        let thirdLetter = input[2];

        return firstLetter + secondLetter + thirdLetter;
    }

    getSuffix(input){

        let thirdToLast = input[input.length-3];
        let secondToLast = input[input.length-2];
        let lastLetter = input[input.length-1];
        return thirdToLast + secondToLast + lastLetter;
    }

    getMiddleCharacter(input){
        let middleCharacter = input[Math.round((input.length-1)/2)];
        return middleCharacter;
    }

    getFirstWord(input){
        let words = input.split(" ");
        let firstWord = words[0];
        return firstWord;
    }
    
    getSecondWord(spaceDelimnatedInput){
        let words = spaceDelimnatedInput.split(" ");
        let secondWord = words[1];
        return secondWord;
    }
    
    reverse(input){;

        let reverseWord = "";
        
         for(let  i=input.length-1; i >=0;i--){
           reverseWord += input[i];

         }
        return reverseWord;
    }
}

module.exports = StrangerStrings;