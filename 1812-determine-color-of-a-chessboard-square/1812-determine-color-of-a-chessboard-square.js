/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    //check whether number is even or odd
     let numCheck = parseInt(coordinates[1]) % 2
     // alphabet check
     return coordinates[0].charCodeAt(0) % 2 !== numCheck;
};