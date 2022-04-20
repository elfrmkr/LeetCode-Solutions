var canConstruct = function(ransomNote, magazine) {
    
    if(ransomNote.length > magazine.length) return false
  
    let result = [...magazine]
    let ransom = [...ransomNote]
    let hashMap = {}
        hashMapRansom = {}
    
    // count the frequency of appearence in an array
    for(let i = 0; i < result.length; i++) {
        if(hashMap[result[i]])  hashMap[result[i]] += 1
        else hashMap[result[i]] = 1
    }
        for(let i = 0; i < ransom.length; i++) {
        if(hashMapRansom[ransom[i]])  hashMapRansom[ransom[i]] += 1
        else hashMapRansom[ransom[i]] = 1
    }
    let keysRansom = Object.keys(hashMapRansom).sort()
    let keysMagazine = Object.keys(hashMap).sort()
    
    
    for(let i = 0; i < keysRansom.length; i++) {
      if(!hashMap[keysRansom[i]]) return false
      if(hashMapRansom[keysRansom[i]] > hashMap[keysRansom[i]]) {
            return false
        }
    }
  return true
    
};