/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = {},
        map2 = {}
    

    for(var i = 0; i < s.length; i++) {
        if(map1[s[i]] == undefined) map1[s[i]] = i;
        if(map2[t[i]] == undefined) map2[t[i]] = i;
        if(map1[s[i]] != map2[t[i]]) return false;
    }
    return true;
};