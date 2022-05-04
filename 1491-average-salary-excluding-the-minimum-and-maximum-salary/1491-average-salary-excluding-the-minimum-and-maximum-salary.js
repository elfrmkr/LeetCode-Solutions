/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Math.min(...salary)
    let max = Math.max(...salary)
    let sum = 0
    for(let i = 0; i < salary.length; i++) {
        sum += salary[i]
    }
    
    sum = sum - min - max
    
    return sum / (salary.length - 2)
};