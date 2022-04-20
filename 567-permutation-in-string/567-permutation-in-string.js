
var checkInclusion = function(s1, s2) {

   
 let start = 0,
     end = s1.length
 let sortedS1 = [...s1].sort()
 if(s1.length > s2.length) return false
    
 while(end <= s2.length) {
    let window = s2.substring(start, end)
     if(s1 === window) return true  
     if(arraysMatch(sortedS1, [...window].sort()) === true) return true
     else { 
       end++
       start++
     }
 }
 return false
};

var arraysMatch = function (arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;

};