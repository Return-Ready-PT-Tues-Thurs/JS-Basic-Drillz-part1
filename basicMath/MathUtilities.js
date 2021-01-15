class MathUtilities {


    add(baseValue, valueToAdd){
       let a = baseValue + valueToAdd 
        return (a);
    }

    subtract(baseValue, valueToAdd){
        let s = baseValue - valueToAdd
        return (s);
    }

    divide(baseValue, valueToAdd){
         let d = (baseValue/valueToAdd)
        return (d);
    }

    multiply(baseValue, valueToAdd){
        let m = baseValue * valueToAdd
        return(m);
    }

}



module.exports = MathUtilities;