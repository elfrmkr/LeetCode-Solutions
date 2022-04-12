/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
    let left = 0;
	let right = n;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		if (!isBadVersion(middle)) left = middle + 1;
		else if (isBadVersion(middle) && isBadVersion(middle - 1)) right = middle - 1; // if there exist previous bad ones and the current one
		else return middle;
	}
    };
};