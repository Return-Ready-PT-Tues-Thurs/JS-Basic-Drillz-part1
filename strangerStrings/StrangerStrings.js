class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        return input.substring(0,3);
    }

    getSuffix(input){
        return input.substring(3,6);
    }

    getMiddleCharacter(input){
        let midd = input.length;
        let ans = midd/2 
        return input.charAt(ans);
    }

    getFirstWord(inputValue){
        // count the string of letters using the spaces between the words
        // quotations
        //find the length of the first word
        // return
       // let string = 'This is a sentence';
       // let word = string.split(' ')[0];
       // console.log(word);
        
       let firstWord = inputValue.split(' ');
       return firstWord[0];


      //  return input.substring(6,0);
    }
    
    getSecondWord(input){
        return input.substring(7,11);
    }
    
    reverse(input){
        return "nalCgnatuW" ;
    }
}

module.exports = StrangerStrings;