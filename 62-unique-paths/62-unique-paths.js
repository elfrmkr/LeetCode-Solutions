/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
 return factorial(m + n - 2) / (factorial(m-1) * factorial(n-1))
};

var factorial = function(n) {
  if (n == 0 || n == 1)
    return 1;
 
  return factorial(n-1) * n;
}