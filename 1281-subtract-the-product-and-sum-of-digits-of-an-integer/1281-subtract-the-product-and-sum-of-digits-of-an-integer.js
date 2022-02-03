/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let array = []
    
 if(n / 10 < 1){
    return 0 // one digit     
 } 
 else {
        while(n/10 >= 1)
        {
         array.push( n % 10) 
         n = (n - n%10) /10       
        }
    array.push(n)   
}
    let sum = 0
    let mul = 1
    for(let i = 0; i < array.length; i++) {
        sum = sum + array[i]
        mul = mul * array[i]
    }
    if(array.includes(0)) return -sum
    return mul - sum
};