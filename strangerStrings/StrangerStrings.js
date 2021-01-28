class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        return  input.substring(0,3);
    }

    getSuffix(input){
        return input.substring(3,6);
    }

    getMiddleCharacter(input) {
       //find lenght of the string

        
       let midd = input.length;

       // divide it by 2 
        let ans =  midd/2;

       // get the letter which corresponds to the answer 

        return input.charAt(ans);
        
    }

    getFirstWord(input){
        return input.split(" ")[0];
    }
    
    getSecondWord(spaceDelimnatedInput){
    
        return spaceDelimnatedInput.split(" ")[1];
    }
    
    //    reverse(input){
     
    //    return input.split("").reverse().join("");
    //    } 

       reverse(input){
     
        return input.split("").reverse().join("").split(" ").reverse().join(" ");
        } 
 




}

module.exports = StrangerStrings;