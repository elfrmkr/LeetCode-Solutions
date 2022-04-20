/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let first = [...s].sort()
    let second = [...t].sort()
    
    if(s.length !== t.length) return false

    return arraysMatch(first,second)
};

var arraysMatch = function (arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;

};