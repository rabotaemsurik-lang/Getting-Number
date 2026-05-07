const formulaCalculating = (point) =>{
    function func(first, second){
        if (first === point){
            return second;
        }
        if (first > point){
            return null;
        }
        return func(first* 3, `(${second} * 3)`) || func( first + 5 , `(${second} + 5 )`)
    }
    return func(1, "1")
}
console.log(formulaCalculating(27));